[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsList

# Class: OutwardJobsFreeIssueMaterialsList

Describes the message consisting of the list of outward jobs free issue materials

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsList

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsList`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsList.md#constructor)

### Properties

- [list](OutwardJobsFreeIssueMaterialsList.md#list)
- [fields](OutwardJobsFreeIssueMaterialsList.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsList.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsList.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsList.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsList.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsList.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsList.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsList.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsList.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsList.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsList.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsList.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsList.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsList.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsList.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsList.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsList**(`data?`): [`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsList\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:944

## Properties

### list

• **list**: [`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.OutwardJobFreeIssueMaterial list = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:942

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:951

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:949

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsList"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:950

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:967

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:955

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:959

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsList`](OutwardJobsFreeIssueMaterialsList.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:963
