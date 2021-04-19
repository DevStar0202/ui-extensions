//
//  Button.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-09-27.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class Button: Component {
    
    let labelType: LabelType
    public let onClick: Lambda
    
    enum PropertiesKeys: String, CodingKey {
        case label, onClick
    }
    
    required public init(from decoder: Decoder) throws {
        let properties = try decoder.container(keyedBy: PropertiesKeys.self)
        
        labelType = try properties.decode(LabelType.self, forKey: .label)
        onClick = try properties.decode(Lambda.self, forKey: .onClick)
        
        try super.init(from: decoder)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    public var label: String? {
        return labelType.string
    }
    
}
