interface Window {
  Kakao: {
    init: (appKey: string) => void;
    isInitialized: () => boolean;
    Link: {
      sendDefault: (options: any) => void;
    };
  };
}
