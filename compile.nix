{ pkgs ? import <nixpkgs> {} }:
let
  inherit pkgs;
in
  pkgs.stdenv.mkDerivation {
    name = "typescript-compiler";
    src = ./.;
    buildInputs = with pkgs; [ pkgs.nodejs_20 pkgs.typescript ];
    buildPhase = ''
      tsc
    '';
    installPhase = ''
      mkdir -p $out/dist
      cp -r dist/* $out/dist/
    '';
  }