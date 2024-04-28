import { get_access_token } from "./auth";

const get_data = async (url, appContext, access_token) => {
  try {
    const res = await fetch(url, {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
        "access-token": get_access_token(),
      }),
    });
    const data = await res.json();
    if (data.error && data.error.status_code == 401) {
      localStorage.clear();
    }
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data;
  } catch (error) {
    appContext.setAlert("Oooops! something went wrong");
    console.log("error");
  }
};

const get_data_without_token = async (url, appContext) => {
  try {
    const res = await fetch(url, {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    const data = await res.json();
    if (data.error && data.error.status_code == 401) {
      localStorage.clear();
    }
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data;
  } catch (error) {
    appContext.setAlert("Oooops! something went wrong");
    console.log("error");
    throw new Error("Oooops! something went wrong");
  }
};

const post_data_without_token = async (url, body, appContext) => {
  try {
    const res = await fetch(url, {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (data.error && data.error.status_code == 401) {
      localStorage.clear();
    }
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data;
  } catch (error) {
    appContext.setAlert("Oooops! something went wrong");
    console.log("error");
    throw new Error("Oooops! something went wrong");
  }
};

async function post_img1(url, fd, appContext, access_token = 0) {
  try {
    appContext.setAlert("Image upload started", "alert_error");
    const res = await fetch(url, {
      method: "post",
      body: fd,
      headers: new Headers({
        "access-token": get_access_token(),
      }),
    });
    const data = await res.json();
    // appContext.setLoad(false);
    // appContext.setResponse("Image Uploaded");
    // appContext.setClass("alert_success");
    // setTimeout(() => {
    //   appContext.setClass("alert");
    // }, 1000);
    if (data?.success) {
      appContext.setAlert("Image uploaded!", "alert_error");
    } else {
      appContext.setAlert("There was an error uploading image", "alert_error");
    }
    return data;
  } catch (error) {
    // appContext.setLoad(false);
    appContext.setAlert("Image upload erorr", "alert_error");

    appContext.setAlert(error.message, "alert_error");
  }
}
export { get_data, get_data_without_token, post_data_without_token, post_img1 };
