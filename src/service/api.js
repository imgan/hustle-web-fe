import React from "react";
import API from "./config";
import axios from "axios";

export const url_image = (e)=> {return (`${API}/photos/public/${e}`)}

export const getHomepage = async () => {
    const data = await axios.get(`${API}/api/homepage`)
    return data
  };

export const getAboutUs = async () => {
  const data = await axios.get(`${API}/api/aboutus`)
  return data
};

export const getFuel = async () => {
  const data = await axios.get(`${API}/api/fuel`)
  return data
};

export const getFunctional = async () => {
  const data = await axios.get(`${API}/api/functional`)
  return data
};

export const getPersonalTrainer = async () => {
  const data = await axios.get(`${API}/api/trainer`)
  return data
};

export const getPilates = async () => {
  const data = await axios.get(`${API}/api/pilates`)
  return data
};

export const getCycling = async () => {
  const data = await axios.get(`${API}/api/cycling`)
  return data
};

export const getTrainingCustomMenu = async () => {
  const data = await axios.get(`${API}/api/training`)
  return data
};

export const getRecovery = async () => {
  const data = await axios.get(`${API}/api/recovery`)
  return data
};

export const getPrivacy_TnC = async () => {
  const data = await axios.get(`${API}/api/privacyterms`)
  return data
};

export const getContactUs = async () => {
  const data = await axios.get(`${API}/api/contactus`)
  return data
};

export const getInstagramPost = async (limit,access_token) => {
  const data = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${limit}&access_token=${access_token}`)
  return data
};

export const getFAQ = async () => {
  const data = await axios.get(`${API}/api/faq`)
  return data
};