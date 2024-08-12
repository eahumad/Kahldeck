from typing import Any
from app.domain.button import Button
from app.domain.icon import Icon
from app.domain.iconPack import IconPack
from app.domain.layout import Layout
from app.domain.macro import Macro
from app.provider.app_provider import AppProvider

from app.provider.icon_pack_provider import IconPackProvider
from app.provider.layout_provider import LayoutProvider
from migration.i_migration import IMigration


class AppMigration(IMigration):
    
    _app_provider: AppProvider
    _icon_pack_provider: IconPackProvider
    _layout_provider: LayoutProvider
    _icons: list[Icon]
    
    def __init__(self):
        self._app_provider = AppProvider()
        self._icon_pack_provider = IconPackProvider()
        self._layout_provider = LayoutProvider()
    
    
    def migrate(self):
        # TODO: Implement
        self._create_app_database()

        pass
    
    def rollback(self):
        # TODO: Implement
        # remove app database
        # remove table layouts
        # remove table iconpacks
        pass
    
    
    def _create_app_database(self):
        self._app_provider.create_tables()
        
    def _register_default_inconpack(self):
        icons = [
            Icon(name="copy", tags=["clipboard", "copy", "paste"], file="content-copy.svg", uuid=None),
            Icon(name="paste", tags=["clipboard", "copy", "paste"], file="copy.svg", uuid=None),
            Icon(name="stop", tags=["stop", "media", "player"], file="media-stop.svg", uuid=None),
            Icon(name="play", tags=["play", "media", "player", "run", "music", "start", "video"], file="play.svg", uuid=None),
            Icon(name="scissors", tags=["scissors", "cut", "copy", "paste"], file="scissors.svg", uuid=None),
            Icon(name="next", tags=["next", "media", "player", "music", "video"], file="skip-next.svg", uuid=None),
            Icon(name="sync", tags=["sync", "reload", "refresh", "update", "download", "upload"], file="sync.svg", uuid=None),
            Icon(name="terminal", tags=["terminal", "command", "prompt", "shell"], file="terminal.svg", uuid=None),
            Icon(name="indent", tags=["indent", "text", "left", "right"], file="text-indent-left.svg", uuid=None)
        ]
        
        default_inconpack = IconPack(
            name="default_inconpack",
            version="1.0.0",
            author="eahumada",
            min_kahl_version="0.0.1",
            icons=icons,
            description="Default Icon Pack",
            uuid=None
        )
        
        self._icon_pack_provider.register_icon_pack(default_inconpack)
        self._icons = icons
        
        
    def _create_default_layout(self):
        buttons = [
            Button(name="copy", icon=self._icons[0], macro=Macro(name="copy", uuid=None, keys=["ctrl", "c"]), uuid=None),
            Button(name="paste", icon=self._icons[1], macro=Macro(name="paste", uuid=None, keys=["ctrl", "v"]), uuid=None),
            Button(name="stop", icon=self._icons[2], macro=Macro(name="stop", uuid=None, keys=["ctrl", "s"]), uuid=None),
            Button(name="play", icon=self._icons[3], macro=Macro(name="play", uuid=None, keys=["ctrl", "p"]), uuid=None),
            Button(name="scissors", icon=self._icons[4], macro=Macro(name="scissors", uuid=None, keys=["ctrl", "x"]), uuid=None),
            Button(name="next", icon=self._icons[5], macro=Macro(name="next", uuid=None, keys=["ctrl", "n"]), uuid=None),
            Button(name="sync", icon=self._icons[6], macro=Macro(name="sync", uuid=None, keys=["ctrl", "u"]), uuid=None),
            Button(name="terminal", icon=self._icons[7], macro=Macro(name="terminal", uuid=None, keys=["ctrl", "t"]), uuid=None),
            Button(name="indent", icon=self._icons[8], macro=Macro(name="indent", uuid=None, keys=["ctrl", "i"]), uuid=None)
        ]
        
        layout = Layout(name="default_layout", rows=1, columns=9, buttons=buttons, uuid=None)
        self._layout_provider.add_layout(layout)

        
        
        
        
        
        