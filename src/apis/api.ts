import { API_URL } from '@/constants';
import { APIResponse } from '@/types/api';
import { MeResponse } from '@/types/profile';
import { SiweMessage } from 'siwe';

export const getNonce = async (): Promise<string> => {
  const res = await fetch(`${API_URL}/zikkie/nonce`, {
    credentials: 'include',
  });

  return await res.text();
};

export const verifyMessage = async (data: {
  message: SiweMessage;
  signature?: string;
}): Promise<APIResponse<{ ok: boolean }>> => {
  const res = await fetch(`${API_URL}/zikkie/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  return await res.json();
};

export const me = async (): Promise<APIResponse<MeResponse>> => {
  const res = await fetch(`${API_URL}/zikkie/me`, {
    credentials: 'include',
  });

  return await res.json();
};

export const storeJson = async (
  jsonContents: object[]
): Promise<APIResponse<{ urls: string[] }>> => {
  const res = await fetch(`${API_URL}/zikkie/store-json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ jsonData: jsonContents }),
    credentials: 'include',
  });

  return await res.json();
};

export const update = async (data: {
  name?: string;
  zikkie_address?: string;
  email?: string;
  phone?: string;
  data?: object;
}): Promise<
  APIResponse<{
    name: string;
    address: string;
    zikkieAddress: string;
    email: string;
    phone: string;
  }>
> => {
  const res = await fetch(`${API_URL}/zikkie/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
    credentials: 'include',
  });

  return await res.json();
};

export const logout = async (): Promise<APIResponse<{ ok: boolean }>> => {
  const res = await fetch(`${API_URL}/zikkie/logout`, {
    credentials: 'include',
  });

  return await res.json();
};
