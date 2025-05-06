[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsItemsList

# Class: InwardJobsFreeIssueMaterialsItemsList

Describes the message consisting of the list of inward job free issue material items

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsItemsList

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsItemsList`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsItemsList.md#constructor)

### Properties

- [list](InwardJobsFreeIssueMaterialsItemsList.md#list)
- [fields](InwardJobsFreeIssueMaterialsItemsList.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsItemsList.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsItemsList.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsItemsList.md#clone)
- [equals](InwardJobsFreeIssueMaterialsItemsList.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsItemsList.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsItemsList.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsItemsList.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsItemsList.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsItemsList.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsItemsList.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsItemsList.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsItemsList.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsItemsList.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsItemsList.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsItemsList.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsItemsList**(`data?`): [`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsItemsList\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1007

## Properties

### list

• **list**: [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.InwardJobFreeIssueMaterialItem list = 1;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1005

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1014

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1012

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsItemsList"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1013

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1030

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1018

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1022

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsItemsList`](InwardJobsFreeIssueMaterialsItemsList.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1026
