import { createSlice } from '@reduxjs/toolkit';


const usuarioSlice = createSlice({
    name: "usuarioSlice",
    initialState: {
        user: "",
        nombre: "",
        token: "",
        empresa: "",
        mensaje: "",
        documentoFiscal: "",
        nosync: 0,
        monedaAbreviacion:"",
        moneda:"",
        //APIURL:"http://190.109.223.244:7106/", //http://190.109.223.244:7106/   http://10.100.1.27:5055
        APIURLAVENTAS: "http://190.109.203.183:9080/",
        APIURLPROXY: "http://190.109.223.244:8083/",
        logeado: false
    },
    reducers: {
        iniciarSesion: (state, action) => {
            state.user = action.payload.user;
            state.nombre = action.payload.nombre;
            state.empresa = action.payload.empresa;
            state.logeado = true;
        },
        mensajeLogin: (state, action) =>{
            state.mensaje = action.payload.mensaje;
        },
        documentoMostrar: (state, action) =>{
            state.documentoFiscal = action.payload.documentoFiscal;
        },
        noSincronizado: (state, action) =>{
            state.nosync = action.payload.nosync;
        },
        tipoMoneda:(state, action)=>{
            state.monedaAbreviacion = action.payload.monedaAbreviacion;
            state.moneda = action.payload.moneda;
        },
        terminarSesion: (state) => {
            state.user = "";
            state.nombre = "";
            state.logeado = false;
            state.token = "";
            state.empresa = "";
            state.mensaje = "";
            state.documentoFiscal="";
            state.nosync = 0;
            state.monedaAbreviacion = "";
            state.moneda = "";
        }
    }
});

export const { iniciarSesion, terminarSesion, mensajeLogin, documentoMostrar, noSincronizado, tipoMoneda } = usuarioSlice.actions;
export default usuarioSlice.reducer;