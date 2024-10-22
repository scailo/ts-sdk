[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOfferAncillaryParameters

# Class: SupplyOfferAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.SupplyOfferAncillaryParameters

## Hierarchy

- `Message`\<[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)\>

  ↳ **`SupplyOfferAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](SupplyOfferAncillaryParameters.md#constructor)

### Properties

- [buyerLocationUuid](SupplyOfferAncillaryParameters.md#buyerlocationuuid)
- [consigneeLocationUuid](SupplyOfferAncillaryParameters.md#consigneelocationuuid)
- [currencyUuid](SupplyOfferAncillaryParameters.md#currencyuuid)
- [vendorUuid](SupplyOfferAncillaryParameters.md#vendoruuid)
- [fields](SupplyOfferAncillaryParameters.md#fields)
- [runtime](SupplyOfferAncillaryParameters.md#runtime)
- [typeName](SupplyOfferAncillaryParameters.md#typename)

### Methods

- [clone](SupplyOfferAncillaryParameters.md#clone)
- [equals](SupplyOfferAncillaryParameters.md#equals)
- [fromBinary](SupplyOfferAncillaryParameters.md#frombinary)
- [fromJson](SupplyOfferAncillaryParameters.md#fromjson)
- [fromJsonString](SupplyOfferAncillaryParameters.md#fromjsonstring)
- [getType](SupplyOfferAncillaryParameters.md#gettype)
- [toBinary](SupplyOfferAncillaryParameters.md#tobinary)
- [toJSON](SupplyOfferAncillaryParameters.md#tojson)
- [toJson](SupplyOfferAncillaryParameters.md#tojson-1)
- [toJsonString](SupplyOfferAncillaryParameters.md#tojsonstring)
- [equals](SupplyOfferAncillaryParameters.md#equals-1)
- [fromBinary](SupplyOfferAncillaryParameters.md#frombinary-1)
- [fromJson](SupplyOfferAncillaryParameters.md#fromjson-1)
- [fromJsonString](SupplyOfferAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOfferAncillaryParameters**(`data?`): [`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)\> |

#### Returns

[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)

#### Overrides

Message\&lt;SupplyOfferAncillaryParameters\&gt;.constructor

#### Defined in

src/supply_offers.scailo_pb.ts:709

## Properties

### buyerLocationUuid

• **buyerLocationUuid**: `string` = `""`

The UUID of the buyer location (the UUID of the associated buyer_location_id)

**`Generated`**

from field: string buyer_location_uuid = 213;

#### Defined in

src/supply_offers.scailo_pb.ts:693

___

### consigneeLocationUuid

• **consigneeLocationUuid**: `string` = `""`

The UUID of the consignee location (the UUID of the associated consignee_location_id)

**`Generated`**

from field: string consignee_location_uuid = 212;

#### Defined in

src/supply_offers.scailo_pb.ts:686

___

### currencyUuid

• **currencyUuid**: `string` = `""`

The UUID of the currency (the UUID of the associated currency)

**`Generated`**

from field: string currency_uuid = 215;

#### Defined in

src/supply_offers.scailo_pb.ts:707

___

### vendorUuid

• **vendorUuid**: `string` = `""`

The UUID of the vendor (the UUID of the associated vendor_id)

**`Generated`**

from field: string vendor_uuid = 214;

#### Defined in

src/supply_offers.scailo_pb.ts:700

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/supply_offers.scailo_pb.ts:716

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/supply_offers.scailo_pb.ts:714

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOfferAncillaryParameters"``

#### Defined in

src/supply_offers.scailo_pb.ts:715

## Methods

### clone

▸ **clone**(): [`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)

Create a deep copy.

#### Returns

[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md) \| `PlainMessage`\<[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md) \| `PlainMessage`\<[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)\> |
| `b` | `undefined` \| [`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md) \| `PlainMessage`\<[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/supply_offers.scailo_pb.ts:735

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)

#### Defined in

src/supply_offers.scailo_pb.ts:723

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)

#### Defined in

src/supply_offers.scailo_pb.ts:727

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferAncillaryParameters`](SupplyOfferAncillaryParameters.md)

#### Defined in

src/supply_offers.scailo_pb.ts:731
