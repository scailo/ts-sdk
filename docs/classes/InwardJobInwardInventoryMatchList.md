[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobInwardInventoryMatchList

# Class: InwardJobInwardInventoryMatchList

Describes the list of inward inventory match families

**`Generated`**

from message Scailo.InwardJobInwardInventoryMatchList

## Hierarchy

- `Message`\<[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)\>

  ↳ **`InwardJobInwardInventoryMatchList`**

## Table of contents

### Constructors

- [constructor](InwardJobInwardInventoryMatchList.md#constructor)

### Properties

- [list](InwardJobInwardInventoryMatchList.md#list)
- [fields](InwardJobInwardInventoryMatchList.md#fields)
- [runtime](InwardJobInwardInventoryMatchList.md#runtime)
- [typeName](InwardJobInwardInventoryMatchList.md#typename)

### Methods

- [clone](InwardJobInwardInventoryMatchList.md#clone)
- [equals](InwardJobInwardInventoryMatchList.md#equals)
- [fromBinary](InwardJobInwardInventoryMatchList.md#frombinary)
- [fromJson](InwardJobInwardInventoryMatchList.md#fromjson)
- [fromJsonString](InwardJobInwardInventoryMatchList.md#fromjsonstring)
- [getType](InwardJobInwardInventoryMatchList.md#gettype)
- [toBinary](InwardJobInwardInventoryMatchList.md#tobinary)
- [toJSON](InwardJobInwardInventoryMatchList.md#tojson)
- [toJson](InwardJobInwardInventoryMatchList.md#tojson-1)
- [toJsonString](InwardJobInwardInventoryMatchList.md#tojsonstring)
- [equals](InwardJobInwardInventoryMatchList.md#equals-1)
- [fromBinary](InwardJobInwardInventoryMatchList.md#frombinary-1)
- [fromJson](InwardJobInwardInventoryMatchList.md#fromjson-1)
- [fromJsonString](InwardJobInwardInventoryMatchList.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobInwardInventoryMatchList**(`data?`): [`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)\> |

#### Returns

[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)

#### Overrides

Message\&lt;InwardJobInwardInventoryMatchList\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:3662

## Properties

### list

• **list**: [`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.InwardJobInwardInventoryMatch list = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:3660

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:3669

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:3667

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobInwardInventoryMatchList"``

#### Defined in

src/inward_jobs.scailo_pb.ts:3668

## Methods

### clone

▸ **clone**(): [`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)

Create a deep copy.

#### Returns

[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md) \| `PlainMessage`\<[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)\>

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
| `a` | `undefined` \| [`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md) \| `PlainMessage`\<[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)\> |
| `b` | `undefined` \| [`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md) \| `PlainMessage`\<[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:3685

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3673

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3677

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobInwardInventoryMatchList`](InwardJobInwardInventoryMatchList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3681
