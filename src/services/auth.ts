export type AuthUser = {
  id: string;
  name: string;
  phone: string;
};

type LoginPayload = {
  phone: string;
  password: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * بررسی کاربر برای لاگین
 * الان از json-server می‌خواند
 * بعداً می‌تواند به /auth/login بک‌اند واقعی وصل شود
 */
export async function verifyUser(
  payload: LoginPayload,
): Promise<AuthUser | null> {
  const res = await fetch(
    `${API_URL}/users?phone=${encodeURIComponent(payload.phone)}`,
    { cache: "no-store" },
  );

  if (!res.ok) return null;

  const users = await res.json();
  const user = users?.[0];

  if (!user || user.password !== payload.password) {
    return null;
  }

  return {
    id: String(user.id),
    name: user.name,
    phone: user.phone,
  };
}

/**
 * ثبت‌نام (اختیاری برای مرحله بعد)
 * بعداً می‌شود: POST /auth/register
 */
export async function registerUser(data: {
  name: string;
  phone: string;
  password: string;
}) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Register failed");
  }

  return res.json();
}
