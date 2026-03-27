export interface DokployInstance {
  url: string;
  token: string;
}

export interface ServerConfig {
  instances: Record<string, DokployInstance>;
  defaultInstance?: string;
}
