interface ISelectedFile {
  file: File | null;
  url: string;
}

interface IUploadFiles {
  profile: ISelectedFile;
  background: ISelectedFile;
}
