import eel

from app.controller.layout_controller import LayoutController



layoutController = LayoutController()


eel.expose(layoutController.show_dummy)
eel.expose(layoutController.get_layouts)
eel.expose(layoutController.add_layout)
eel.expose(layoutController.update_layout)

eel.init('kahldeck-dashboard/dist')
eel.start('index.html', port=8476, mode=None)
