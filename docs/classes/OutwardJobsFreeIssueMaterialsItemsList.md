[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsItemsList

# Class: OutwardJobsFreeIssueMaterialsItemsList

Describes the message consisting of the list of outward job free issue material items

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsItemsList

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsItemsList`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsItemsList.md#constructor)

### Properties

- [list](OutwardJobsFreeIssueMaterialsItemsList.md#list)
- [fields](OutwardJobsFreeIssueMaterialsItemsList.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsItemsList.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsItemsList.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsItemsList.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsItemsList.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsItemsList.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsItemsList.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsItemsList.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsItemsList.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsItemsList.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsItemsList.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsItemsList.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsItemsList.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsItemsList.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsItemsList.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsItemsList.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsItemsList**(`data?`): [`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsItemsList\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1063

## Properties

### list

• **list**: [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.OutwardJobFreeIssueMaterialItem list = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1061

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1070

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1068

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsItemsList"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1069

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1086

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1074

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1078

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsItemsList`](OutwardJobsFreeIssueMaterialsItemsList.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1082
