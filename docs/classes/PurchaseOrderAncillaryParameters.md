[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderAncillaryParameters

# Class: PurchaseOrderAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.PurchaseOrderAncillaryParameters

## Hierarchy

- `Message`\<[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)\>

  ↳ **`PurchaseOrderAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderAncillaryParameters.md#constructor)

### Properties

- [buyerLocationUuid](PurchaseOrderAncillaryParameters.md#buyerlocationuuid)
- [consigneeLocationUuid](PurchaseOrderAncillaryParameters.md#consigneelocationuuid)
- [currencyUuid](PurchaseOrderAncillaryParameters.md#currencyuuid)
- [vendorUuid](PurchaseOrderAncillaryParameters.md#vendoruuid)
- [fields](PurchaseOrderAncillaryParameters.md#fields)
- [runtime](PurchaseOrderAncillaryParameters.md#runtime)
- [typeName](PurchaseOrderAncillaryParameters.md#typename)

### Methods

- [clone](PurchaseOrderAncillaryParameters.md#clone)
- [equals](PurchaseOrderAncillaryParameters.md#equals)
- [fromBinary](PurchaseOrderAncillaryParameters.md#frombinary)
- [fromJson](PurchaseOrderAncillaryParameters.md#fromjson)
- [fromJsonString](PurchaseOrderAncillaryParameters.md#fromjsonstring)
- [getType](PurchaseOrderAncillaryParameters.md#gettype)
- [toBinary](PurchaseOrderAncillaryParameters.md#tobinary)
- [toJSON](PurchaseOrderAncillaryParameters.md#tojson)
- [toJson](PurchaseOrderAncillaryParameters.md#tojson-1)
- [toJsonString](PurchaseOrderAncillaryParameters.md#tojsonstring)
- [equals](PurchaseOrderAncillaryParameters.md#equals-1)
- [fromBinary](PurchaseOrderAncillaryParameters.md#frombinary-1)
- [fromJson](PurchaseOrderAncillaryParameters.md#fromjson-1)
- [fromJsonString](PurchaseOrderAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderAncillaryParameters**(`data?`): [`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)\> |

#### Returns

[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)

#### Overrides

Message\&lt;PurchaseOrderAncillaryParameters\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:827

## Properties

### buyerLocationUuid

• **buyerLocationUuid**: `string` = `""`

The UUID of the buyer location (the UUID of the associated buyer_location_id)

**`Generated`**

from field: string buyer_location_uuid = 213;

#### Defined in

src/purchases_orders.scailo_pb.ts:811

___

### consigneeLocationUuid

• **consigneeLocationUuid**: `string` = `""`

The UUID of the consignee location (the UUID of the associated consignee_location_id)

**`Generated`**

from field: string consignee_location_uuid = 212;

#### Defined in

src/purchases_orders.scailo_pb.ts:804

___

### currencyUuid

• **currencyUuid**: `string` = `""`

The UUID of the currency (the UUID of the associated currency)

**`Generated`**

from field: string currency_uuid = 215;

#### Defined in

src/purchases_orders.scailo_pb.ts:825

___

### vendorUuid

• **vendorUuid**: `string` = `""`

The UUID of the vendor (the UUID of the associated vendor_id)

**`Generated`**

from field: string vendor_uuid = 214;

#### Defined in

src/purchases_orders.scailo_pb.ts:818

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:834

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:832

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderAncillaryParameters"``

#### Defined in

src/purchases_orders.scailo_pb.ts:833

## Methods

### clone

▸ **clone**(): [`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)

Create a deep copy.

#### Returns

[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md) \| `PlainMessage`\<[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md) \| `PlainMessage`\<[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)\> |
| `b` | `undefined` \| [`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md) \| `PlainMessage`\<[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:853

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:841

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:845

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderAncillaryParameters`](PurchaseOrderAncillaryParameters.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:849
