[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobOutwardInventoryMatchList

# Class: InwardJobOutwardInventoryMatchList

Describes the list of outward inventory match families

**`Generated`**

from message Scailo.InwardJobOutwardInventoryMatchList

## Hierarchy

- `Message`\<[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)\>

  ↳ **`InwardJobOutwardInventoryMatchList`**

## Table of contents

### Constructors

- [constructor](InwardJobOutwardInventoryMatchList.md#constructor)

### Properties

- [list](InwardJobOutwardInventoryMatchList.md#list)
- [fields](InwardJobOutwardInventoryMatchList.md#fields)
- [runtime](InwardJobOutwardInventoryMatchList.md#runtime)
- [typeName](InwardJobOutwardInventoryMatchList.md#typename)

### Methods

- [clone](InwardJobOutwardInventoryMatchList.md#clone)
- [equals](InwardJobOutwardInventoryMatchList.md#equals)
- [fromBinary](InwardJobOutwardInventoryMatchList.md#frombinary)
- [fromJson](InwardJobOutwardInventoryMatchList.md#fromjson)
- [fromJsonString](InwardJobOutwardInventoryMatchList.md#fromjsonstring)
- [getType](InwardJobOutwardInventoryMatchList.md#gettype)
- [toBinary](InwardJobOutwardInventoryMatchList.md#tobinary)
- [toJSON](InwardJobOutwardInventoryMatchList.md#tojson)
- [toJson](InwardJobOutwardInventoryMatchList.md#tojson-1)
- [toJsonString](InwardJobOutwardInventoryMatchList.md#tojsonstring)
- [equals](InwardJobOutwardInventoryMatchList.md#equals-1)
- [fromBinary](InwardJobOutwardInventoryMatchList.md#frombinary-1)
- [fromJson](InwardJobOutwardInventoryMatchList.md#fromjson-1)
- [fromJsonString](InwardJobOutwardInventoryMatchList.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobOutwardInventoryMatchList**(`data?`): [`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)\> |

#### Returns

[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)

#### Overrides

Message\&lt;InwardJobOutwardInventoryMatchList\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:3818](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3818)

## Properties

### list

• **list**: [`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.InwardJobOutwardInventoryMatch list = 1;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3816](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3816)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3825](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3825)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3823](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3823)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobOutwardInventoryMatchList"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:3824](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3824)

## Methods

### clone

▸ **clone**(): [`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)

Create a deep copy.

#### Returns

[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md) \| `PlainMessage`\<[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)\>

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
| `a` | `undefined` \| [`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md) \| `PlainMessage`\<[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)\> |
| `b` | `undefined` \| [`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md) \| `PlainMessage`\<[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3841](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3841)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3829](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3829)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3833](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3833)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobOutwardInventoryMatchList`](InwardJobOutwardInventoryMatchList.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3837](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3837)
