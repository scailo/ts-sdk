[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterialAncillaryParameters

# Class: InwardJobFreeIssueMaterialAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.InwardJobFreeIssueMaterialAncillaryParameters

## Hierarchy

- `Message`\<[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)\>

  ↳ **`InwardJobFreeIssueMaterialAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](InwardJobFreeIssueMaterialAncillaryParameters.md#constructor)

### Properties

- [refUuid](InwardJobFreeIssueMaterialAncillaryParameters.md#refuuid)
- [fields](InwardJobFreeIssueMaterialAncillaryParameters.md#fields)
- [runtime](InwardJobFreeIssueMaterialAncillaryParameters.md#runtime)
- [typeName](InwardJobFreeIssueMaterialAncillaryParameters.md#typename)

### Methods

- [clone](InwardJobFreeIssueMaterialAncillaryParameters.md#clone)
- [equals](InwardJobFreeIssueMaterialAncillaryParameters.md#equals)
- [fromBinary](InwardJobFreeIssueMaterialAncillaryParameters.md#frombinary)
- [fromJson](InwardJobFreeIssueMaterialAncillaryParameters.md#fromjson)
- [fromJsonString](InwardJobFreeIssueMaterialAncillaryParameters.md#fromjsonstring)
- [getType](InwardJobFreeIssueMaterialAncillaryParameters.md#gettype)
- [toBinary](InwardJobFreeIssueMaterialAncillaryParameters.md#tobinary)
- [toJSON](InwardJobFreeIssueMaterialAncillaryParameters.md#tojson)
- [toJson](InwardJobFreeIssueMaterialAncillaryParameters.md#tojson-1)
- [toJsonString](InwardJobFreeIssueMaterialAncillaryParameters.md#tojsonstring)
- [equals](InwardJobFreeIssueMaterialAncillaryParameters.md#equals-1)
- [fromBinary](InwardJobFreeIssueMaterialAncillaryParameters.md#frombinary-1)
- [fromJson](InwardJobFreeIssueMaterialAncillaryParameters.md#fromjson-1)
- [fromJsonString](InwardJobFreeIssueMaterialAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobFreeIssueMaterialAncillaryParameters**(`data?`): [`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)\> |

#### Returns

[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)

#### Overrides

Message\&lt;InwardJobFreeIssueMaterialAncillaryParameters\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:491

## Properties

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:489

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:498

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:496

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterialAncillaryParameters"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:497

## Methods

### clone

▸ **clone**(): [`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)

Create a deep copy.

#### Returns

[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)\> |
| `b` | `undefined` \| [`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:514

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:502

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:506

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialAncillaryParameters`](InwardJobFreeIssueMaterialAncillaryParameters.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:510
