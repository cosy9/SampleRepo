import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import { openModal } from "src/store/slices/modalSlice";
import { store } from "../store/store";
enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: AxiosRequestHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  // "Cache-Control": "no-cache",
};

// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    if (localStorage) {
      const token = localStorage.getItem("access_token");

      if (token != null && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  } catch (_error) {
    return config; 
  }
};

class Magento {
  private instance: AxiosInstance | null = null;

  private get magento(): AxiosInstance {
    return this.instance != null ? this.instance : this.initMagento();
  }

  initMagento() {
    const magento = axios.create({
      baseURL: process.env.NEXT_PUBLIC_DEV_BASE_URL || "https://stage-react.enrichbeauty.com",
      headers,
      withCredentials: false,
    });

    magento.interceptors.request.use(injectToken, error => Promise.reject(error));

    magento.interceptors.response.use(
      response => response,
      error => {
        const { response } = error;
        return this.handleError(response);
      },
    );

    this.instance = magento;
    return magento;
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.magento.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.magento.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.magento.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.magento.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.magento.delete<T, R>(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  // private handleError(error: AxiosError) {
  //   const status = error.response?.status;

  //   switch (status) {
  //     case StatusCode.InternalServerError: {
  //       // Handle InternalServerError
  //       break;
  //     }
  //     case StatusCode.Forbidden: {
  //       // Handle Forbidden
  //       break;
  //     }
  //     case StatusCode.Unauthorized: {
  //       // Handle Unauthorized
  //       localStorage.access_token = "";
  //       break;
  //     }
  //     case StatusCode.TooManyRequests: {
  //       // Handle TooManyRequests
  //       break;
  //     }
  //   }

  // post<T = any, R = AxiosResponse<T>>(
  //   url: string,
  //   data?: T,
  //   config?: AxiosRequestConfig
  // ): Promise<R> {
  //   return this.magento.post<T, R>(url, data, config);
  // }

  // put<T = any, R = AxiosResponse<T>>(
  //   url: string,
  //   data?: T,
  //   config?: AxiosRequestConfig
  // ): Promise<R> {
  //   return this.magento.put<T, R>(url, data, config);
  // }

  // delete<T = any, R = AxiosResponse<T>>(
  //   url: string,
  //   config?: AxiosRequestConfig
  // ): Promise<R> {
  //   return this.magento.delete<T, R>(url, config);
  // }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private handleError(error: AxiosError & { status?: number }) {
    const status = error?.status;
    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
         // Handle Unauthorized
        localStorage.clear();
        window.location.href = "/login"; // any url window.location.replace('https://codefrontend.com');
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break;
      }
    }

    return Promise.reject(error);
  }
}

export const magento = new Magento();
