[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamilyImagesList

# Class: FamilyImagesList

Describes the message consisting of the list of family images

**`Generated`**

from message Scailo.FamilyImagesList

## Hierarchy

- `Message`\<[`FamilyImagesList`](FamilyImagesList.md)\>

  ↳ **`FamilyImagesList`**

## Table of contents

### Constructors

- [constructor](FamilyImagesList.md#constructor)

### Properties

- [list](FamilyImagesList.md#list)
- [fields](FamilyImagesList.md#fields)
- [runtime](FamilyImagesList.md#runtime)
- [typeName](FamilyImagesList.md#typename)

### Methods

- [clone](FamilyImagesList.md#clone)
- [equals](FamilyImagesList.md#equals)
- [fromBinary](FamilyImagesList.md#frombinary)
- [fromJson](FamilyImagesList.md#fromjson)
- [fromJsonString](FamilyImagesList.md#fromjsonstring)
- [getType](FamilyImagesList.md#gettype)
- [toBinary](FamilyImagesList.md#tobinary)
- [toJSON](FamilyImagesList.md#tojson)
- [toJson](FamilyImagesList.md#tojson-1)
- [toJsonString](FamilyImagesList.md#tojsonstring)
- [equals](FamilyImagesList.md#equals-1)
- [fromBinary](FamilyImagesList.md#frombinary-1)
- [fromJson](FamilyImagesList.md#fromjson-1)
- [fromJsonString](FamilyImagesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamilyImagesList**(`data?`): [`FamilyImagesList`](FamilyImagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamilyImagesList`](FamilyImagesList.md)\> |

#### Returns

[`FamilyImagesList`](FamilyImagesList.md)

#### Overrides

Message\&lt;FamilyImagesList\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:3357](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3357)

## Properties

### list

• **list**: [`FamilyImage`](FamilyImage.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.FamilyImage list = 1;

#### Defined in

[src/families.scailo_pb.ts:3355](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3355)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:3364](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3364)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:3362](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3362)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamilyImagesList"``

#### Defined in

[src/families.scailo_pb.ts:3363](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3363)

## Methods

### clone

▸ **clone**(): [`FamilyImagesList`](FamilyImagesList.md)

Create a deep copy.

#### Returns

[`FamilyImagesList`](FamilyImagesList.md)

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
| `other` | `undefined` \| ``null`` \| [`FamilyImagesList`](FamilyImagesList.md) \| `PlainMessage`\<[`FamilyImagesList`](FamilyImagesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamilyImagesList`](FamilyImagesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamilyImagesList`](FamilyImagesList.md)\>

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
| `a` | `undefined` \| [`FamilyImagesList`](FamilyImagesList.md) \| `PlainMessage`\<[`FamilyImagesList`](FamilyImagesList.md)\> |
| `b` | `undefined` \| [`FamilyImagesList`](FamilyImagesList.md) \| `PlainMessage`\<[`FamilyImagesList`](FamilyImagesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:3380](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3380)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamilyImagesList`](FamilyImagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamilyImagesList`](FamilyImagesList.md)

#### Defined in

[src/families.scailo_pb.ts:3368](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3368)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamilyImagesList`](FamilyImagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyImagesList`](FamilyImagesList.md)

#### Defined in

[src/families.scailo_pb.ts:3372](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3372)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamilyImagesList`](FamilyImagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyImagesList`](FamilyImagesList.md)

#### Defined in

[src/families.scailo_pb.ts:3376](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L3376)
