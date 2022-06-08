import { AvatarDefault, IconGalleryAdd } from '@/assets/svg';
import { canvasPreview, centerAspectCrop } from '@/utils/cropImage';
import { useEffect, useRef, useState } from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';

function AvatarModal() {
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [tabActive, setTabActive] = useState(0);
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, 1));
  }

  useEffect(() => {
    const t = setTimeout(async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
      }
    }, 100);

    return () => {
      clearTimeout(t);
    };
  }, [completedCrop]);

  return (
    <div className="flex flex-col">
      <div className="block">
        {completedCrop ? (
          <canvas
            ref={previewCanvasRef}
            className="w-full h-full max-w-[100px] max-h-[100px] rounded-full border border-gray-100"
            style={{
              objectFit: 'contain',
              width: completedCrop.width,
              height: completedCrop.height,
            }}
          />
        ) : (
          <AvatarDefault className="w-full h-full max-w-[100px] max-h-[100px] text-gray-300" />
        )}
      </div>
      <div className="flex flex-col">
        <div className="inline-flex items-center">
          <div
            className={`px-4 py-2 cursor-pointer ${
              tabActive == 0 ? 'border-b-[2px] border-b-primary' : ''
            }`}
            onClick={() => setTabActive(0)}
          >
            Upload
          </div>
          <div
            className={`px-4 py-2 cursor-pointer ${
              tabActive == 1 ? 'border-b-[2px] border-b-primary' : ''
            }`}
            onClick={() => setTabActive(1)}
          >
            NFT
          </div>
        </div>
        <div className="block mt-8">
          <div
            className={`flex flex-col justify-center items-center ${
              tabActive == 0 ? '' : 'hidden'
            }`}
          >
            <div className="flex max-w-[280px] max-h-[280px]">
              {imgSrc ? (
                <ReactCrop
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  onComplete={(c) => setCompletedCrop(c)}
                  aspect={1}
                  minWidth={100}
                  maxWidth={280}
                  minHeight={100}
                  maxHeight={280}
                  keepSelection
                >
                  <img ref={imgRef} src={imgSrc} onLoad={onImageLoad} />
                </ReactCrop>
              ) : (
                <div className="w-[280px] h-[280px] border border-gray-300 flex justify-center items-center shadow-[0_0_20px_0_rgba(0,0,0,0.1)]">
                  Upload and edit avatar
                </div>
              )}
            </div>
            <div className="w-full max-w-[280px] mt-4">
              <button
                className="w-full inline-flex justify-center items-center px-4 py-2 border-[1.5px] border-gray-200 dark:border-midnight-400 bg-light dark:bg-midnight-800 rounded-lg"
                onClick={() => fileUploadRef.current?.click()}
              >
                <IconGalleryAdd className="w-6 h-6 mr-2" /> Upload image
              </button>
              <input
                ref={fileUploadRef}
                type="file"
                accept="image/*"
                onChange={onSelectFile}
                className="hidden"
              />
            </div>
          </div>
          <div
            className={`flex justify-center items-center ${
              tabActive == 1 ? '' : 'hidden'
            }`}
          >
            Coming soon!
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarModal;
