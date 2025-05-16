[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseReturnAncillaryParameters

# Class: PurchaseReturnAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.PurchaseReturnAncillaryParameters

## Hierarchy

- `Message`\<[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)\>

  ↳ **`PurchaseReturnAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](PurchaseReturnAncillaryParameters.md#constructor)

### Properties

- [locationUuid](PurchaseReturnAncillaryParameters.md#locationuuid)
- [refUuid](PurchaseReturnAncillaryParameters.md#refuuid)
- [fields](PurchaseReturnAncillaryParameters.md#fields)
- [runtime](PurchaseReturnAncillaryParameters.md#runtime)
- [typeName](PurchaseReturnAncillaryParameters.md#typename)

### Methods

- [clone](PurchaseReturnAncillaryParameters.md#clone)
- [equals](PurchaseReturnAncillaryParameters.md#equals)
- [fromBinary](PurchaseReturnAncillaryParameters.md#frombinary)
- [fromJson](PurchaseReturnAncillaryParameters.md#fromjson)
- [fromJsonString](PurchaseReturnAncillaryParameters.md#fromjsonstring)
- [getType](PurchaseReturnAncillaryParameters.md#gettype)
- [toBinary](PurchaseReturnAncillaryParameters.md#tobinary)
- [toJSON](PurchaseReturnAncillaryParameters.md#tojson)
- [toJson](PurchaseReturnAncillaryParameters.md#tojson-1)
- [toJsonString](PurchaseReturnAncillaryParameters.md#tojsonstring)
- [equals](PurchaseReturnAncillaryParameters.md#equals-1)
- [fromBinary](PurchaseReturnAncillaryParameters.md#frombinary-1)
- [fromJson](PurchaseReturnAncillaryParameters.md#fromjson-1)
- [fromJsonString](PurchaseReturnAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseReturnAncillaryParameters**(`data?`): [`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)\> |

#### Returns

[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)

#### Overrides

Message\&lt;PurchaseReturnAncillaryParameters\&gt;.constructor

#### Defined in

src/purchases_returns.scailo_pb.ts:483

## Properties

### locationUuid

• **locationUuid**: `string` = `""`

The UUID of the location (the UUID of the associated location_id)

**`Generated`**

from field: string location_uuid = 215;

#### Defined in

src/purchases_returns.scailo_pb.ts:481

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

src/purchases_returns.scailo_pb.ts:474

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_returns.scailo_pb.ts:490

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_returns.scailo_pb.ts:488

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseReturnAncillaryParameters"``

#### Defined in

src/purchases_returns.scailo_pb.ts:489

## Methods

### clone

▸ **clone**(): [`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)

Create a deep copy.

#### Returns

[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md) \| `PlainMessage`\<[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md) \| `PlainMessage`\<[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)\> |
| `b` | `undefined` \| [`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md) \| `PlainMessage`\<[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_returns.scailo_pb.ts:507

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:495

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:499

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturnAncillaryParameters`](PurchaseReturnAncillaryParameters.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:503
