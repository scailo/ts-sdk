[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptAncillaryParameters

# Class: GoodsReceiptAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.GoodsReceiptAncillaryParameters

## Hierarchy

- `Message`\<[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)\>

  ↳ **`GoodsReceiptAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptAncillaryParameters.md#constructor)

### Properties

- [refUuid](GoodsReceiptAncillaryParameters.md#refuuid)
- [fields](GoodsReceiptAncillaryParameters.md#fields)
- [runtime](GoodsReceiptAncillaryParameters.md#runtime)
- [typeName](GoodsReceiptAncillaryParameters.md#typename)

### Methods

- [clone](GoodsReceiptAncillaryParameters.md#clone)
- [equals](GoodsReceiptAncillaryParameters.md#equals)
- [fromBinary](GoodsReceiptAncillaryParameters.md#frombinary)
- [fromJson](GoodsReceiptAncillaryParameters.md#fromjson)
- [fromJsonString](GoodsReceiptAncillaryParameters.md#fromjsonstring)
- [getType](GoodsReceiptAncillaryParameters.md#gettype)
- [toBinary](GoodsReceiptAncillaryParameters.md#tobinary)
- [toJSON](GoodsReceiptAncillaryParameters.md#tojson)
- [toJson](GoodsReceiptAncillaryParameters.md#tojson-1)
- [toJsonString](GoodsReceiptAncillaryParameters.md#tojsonstring)
- [equals](GoodsReceiptAncillaryParameters.md#equals-1)
- [fromBinary](GoodsReceiptAncillaryParameters.md#frombinary-1)
- [fromJson](GoodsReceiptAncillaryParameters.md#fromjson-1)
- [fromJsonString](GoodsReceiptAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptAncillaryParameters**(`data?`): [`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)\> |

#### Returns

[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)

#### Overrides

Message\&lt;GoodsReceiptAncillaryParameters\&gt;.constructor

#### Defined in

[src/goods_receipts.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L566)

## Properties

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

[src/goods_receipts.scailo_pb.ts:564](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L564)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L573)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts.scailo_pb.ts:571](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L571)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptAncillaryParameters"``

#### Defined in

[src/goods_receipts.scailo_pb.ts:572](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L572)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)

Create a deep copy.

#### Returns

[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md) \| `PlainMessage`\<[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md) \| `PlainMessage`\<[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)\> |
| `b` | `undefined` \| [`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md) \| `PlainMessage`\<[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L589)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L577)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L581)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptAncillaryParameters`](GoodsReceiptAncillaryParameters.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:585](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L585)
