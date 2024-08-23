[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / MerchandisesList

# Class: MerchandisesList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.MerchandisesList

## Hierarchy

- `Message`\<[`MerchandisesList`](MerchandisesList.md)\>

  ↳ **`MerchandisesList`**

## Table of contents

### Constructors

- [constructor](MerchandisesList.md#constructor)

### Properties

- [list](MerchandisesList.md#list)
- [fields](MerchandisesList.md#fields)
- [runtime](MerchandisesList.md#runtime)
- [typeName](MerchandisesList.md#typename)

### Methods

- [clone](MerchandisesList.md#clone)
- [equals](MerchandisesList.md#equals)
- [fromBinary](MerchandisesList.md#frombinary)
- [fromJson](MerchandisesList.md#fromjson)
- [fromJsonString](MerchandisesList.md#fromjsonstring)
- [getType](MerchandisesList.md#gettype)
- [toBinary](MerchandisesList.md#tobinary)
- [toJSON](MerchandisesList.md#tojson)
- [toJson](MerchandisesList.md#tojson-1)
- [toJsonString](MerchandisesList.md#tojsonstring)
- [equals](MerchandisesList.md#equals-1)
- [fromBinary](MerchandisesList.md#frombinary-1)
- [fromJson](MerchandisesList.md#fromjson-1)
- [fromJsonString](MerchandisesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new MerchandisesList**(`data?`): [`MerchandisesList`](MerchandisesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MerchandisesList`](MerchandisesList.md)\> |

#### Returns

[`MerchandisesList`](MerchandisesList.md)

#### Overrides

Message\&lt;MerchandisesList\&gt;.constructor

#### Defined in

src/merchandises.scailo_pb.ts:739

## Properties

### list

• **list**: [`Merchandise`](Merchandise.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Merchandise list = 1;

#### Defined in

src/merchandises.scailo_pb.ts:737

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/merchandises.scailo_pb.ts:746

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/merchandises.scailo_pb.ts:744

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MerchandisesList"``

#### Defined in

src/merchandises.scailo_pb.ts:745

## Methods

### clone

▸ **clone**(): [`MerchandisesList`](MerchandisesList.md)

Create a deep copy.

#### Returns

[`MerchandisesList`](MerchandisesList.md)

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
| `other` | `undefined` \| ``null`` \| [`MerchandisesList`](MerchandisesList.md) \| `PlainMessage`\<[`MerchandisesList`](MerchandisesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`MerchandisesList`](MerchandisesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MerchandisesList`](MerchandisesList.md)\>

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
| `a` | `undefined` \| [`MerchandisesList`](MerchandisesList.md) \| `PlainMessage`\<[`MerchandisesList`](MerchandisesList.md)\> |
| `b` | `undefined` \| [`MerchandisesList`](MerchandisesList.md) \| `PlainMessage`\<[`MerchandisesList`](MerchandisesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/merchandises.scailo_pb.ts:762

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MerchandisesList`](MerchandisesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MerchandisesList`](MerchandisesList.md)

#### Defined in

src/merchandises.scailo_pb.ts:750

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MerchandisesList`](MerchandisesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MerchandisesList`](MerchandisesList.md)

#### Defined in

src/merchandises.scailo_pb.ts:754

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MerchandisesList`](MerchandisesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MerchandisesList`](MerchandisesList.md)

#### Defined in

src/merchandises.scailo_pb.ts:758
