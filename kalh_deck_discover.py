import pyautogui
import time

def presionar_tecla(tecla):
    pyautogui.press(tecla)
    print(f"Tecla presionada: {tecla}")

def presionar_combinacion(teclas):
    pyautogui.hotkey(*teclas)
    print(f"Combinación presionada: {'+'.join(teclas)}")

def main():
    time.sleep(3)
    # Simular presionar una tecla simple
    presionar_tecla('a')
    
    # Esperar un momento
    time.sleep(3)
    
    # Simular presionar una combinación de teclas (Ctrl+C)
    #presionar_combinacion(['ctrl', 'p'])
    
    #time.sleep(3)
    
    
    presionar_combinacion(['alt', 'up'])
    
    time.sleep(3)
    
    # Simular otra combinación (Alt+F4)
    #presionar_combinacion(['alt', 'f4'])

if __name__ == "__main__":
    main()