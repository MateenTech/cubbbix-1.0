import { createContext } from "react";

const portfolio = [
    {
      "category": "app development",
      "name": "JPG to PDF - PDF Maker",
      "ratings": 4.9,
      "users": "1k",
      "descp": "The powerful features make this app an ultimate pdf creator for your device to convert jpg to pdf.",
      "images": [
        "https://play-lh.googleusercontent.com/XeSBmDqjRW1zvyQ9IbSyzqV4gvErHAvR-KnOwcoa3i5AH0ZK417qaxYB-EMUGg98Y3s=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/epuzpfO-rNHFtepc6IJ-uOrTEupmyK80Uq84dLc65Y39UBmUdhGeHy_4uSX9i9VKrPgi=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/pyKTVF40K9oN3Thl_3R5Wszj_QJD2ZS3TGO8Yi1OOBG6eHRzYsUK4aqWEDiTwy50lXI=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/f2O0XBWNzUcW6sWI2jb4tZ2QVBYzo1bjpNeGiYv90EEL7JKU_aqTL08TtzjmU-B1qCXE=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/Vs_RufbMqdcq47j2S1khfHJoD2b3MU1IQYuXXoBE0bM-v90K_eBOkcCLXtYQXDUCkPE=w2560-h1440-rw"
      ]
    },
    {
        "category":"app development",
      "name": "JEST PST Test MCQs Preparation",
      "ratings": 5.0,
      "users": "1k",
      "descp": "JEST PST - Test Preparation MCQs Quiz app is designed for the preparation of JEST - PST Jobs in GOVERNMENT OF SINDH SCHOOL EDUCATION & LITERACY DEPARTMENT",
      "images": [
        "https://play-lh.googleusercontent.com/zS9CeUoCVO_TKVZnR9PC7HW7u_yFd-1IcMB5mhmnE18Yk_wdr9P-bOxfmUBo_EKXd-c=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/sgdwfJxBy0VBOaBEqmM7G6ig47dZaOf3osurrH_tgqOLO2TmKI9XsOiMKLlCyuP4Dzgo=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/UxGRjuFF3D69Uwepmf8B2woMKKEeV3XL-VjOyUAF7vxrfApA70ByZDaK-jqibsMhNI1G=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/ZREsk_2UwtLi9BmULlRbBw_IUKfuR-qD5zjkg0R5LokRNWimBT5qC-EpzS_qgr8Law=w2560-h1440-rw"
      ]
    },
    {
        "category":"app development",
      "name": "Image Finder",
      "ratings": 4.9,
      "users": "10k",
      "descp": "Tired of endless scrolling to find the perfect image? Look no further! With Image Search - Image Finder, your search for images is now faster and more efficient than ever before.",
      "images": [
        "https://play-lh.googleusercontent.com/cHAe1RWoVB6SrHiV-AyERYSKTSZzAUnlSWOqhhtkcmKCPcSbmfaDRj2_OnIquXIa0w=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/ZcnVBmplalMoVlmhDGv1DsZJvieGltrQLVqP92lIQGsoUuipg0V72ueDc4mg8WB3Jfc=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/sjXZyiRu5OyrKcrWI-2_gZ06L7iDTns9izky-K7Nz6v5ulM8kL8fF6FbSc_UnBCceHs=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/tJbnHIJc8DoZGpU7fRpHFsKs_WZ4ocp4D16SqdapFW2r0LMGk64LHY2zVgRA27wYvrlJ=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/RSfnUKdvFnZKAPR50zS2QvxZESL18NUVukpqgpcEeVCHPvwpJwnCFbQTRW3TRkmXjWc=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/AC-smnskhftMqyXCkwXGJHeS9O1LOQvAayubSI_whO4BtCPcXPtss2X6NQN80prpSog=w2560-h1440-rw"
      ]
    },
  ];


export const ContextAPI = createContext({});


export const ContextProvider = ({ children }) => {
    
    return (

        <ContextAPI.Provider value={{portfolio}}>
            {children}
        </ContextAPI.Provider>
    );
}