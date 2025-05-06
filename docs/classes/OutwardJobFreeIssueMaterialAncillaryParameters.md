[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobFreeIssueMaterialAncillaryParameters

# Class: OutwardJobFreeIssueMaterialAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.OutwardJobFreeIssueMaterialAncillaryParameters

## Hierarchy

- `Message`\<[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)\>

  ↳ **`OutwardJobFreeIssueMaterialAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](OutwardJobFreeIssueMaterialAncillaryParameters.md#constructor)

### Properties

- [locationUuid](OutwardJobFreeIssueMaterialAncillaryParameters.md#locationuuid)
- [refUuid](OutwardJobFreeIssueMaterialAncillaryParameters.md#refuuid)
- [fields](OutwardJobFreeIssueMaterialAncillaryParameters.md#fields)
- [runtime](OutwardJobFreeIssueMaterialAncillaryParameters.md#runtime)
- [typeName](OutwardJobFreeIssueMaterialAncillaryParameters.md#typename)

### Methods

- [clone](OutwardJobFreeIssueMaterialAncillaryParameters.md#clone)
- [equals](OutwardJobFreeIssueMaterialAncillaryParameters.md#equals)
- [fromBinary](OutwardJobFreeIssueMaterialAncillaryParameters.md#frombinary)
- [fromJson](OutwardJobFreeIssueMaterialAncillaryParameters.md#fromjson)
- [fromJsonString](OutwardJobFreeIssueMaterialAncillaryParameters.md#fromjsonstring)
- [getType](OutwardJobFreeIssueMaterialAncillaryParameters.md#gettype)
- [toBinary](OutwardJobFreeIssueMaterialAncillaryParameters.md#tobinary)
- [toJSON](OutwardJobFreeIssueMaterialAncillaryParameters.md#tojson)
- [toJson](OutwardJobFreeIssueMaterialAncillaryParameters.md#tojson-1)
- [toJsonString](OutwardJobFreeIssueMaterialAncillaryParameters.md#tojsonstring)
- [equals](OutwardJobFreeIssueMaterialAncillaryParameters.md#equals-1)
- [fromBinary](OutwardJobFreeIssueMaterialAncillaryParameters.md#frombinary-1)
- [fromJson](OutwardJobFreeIssueMaterialAncillaryParameters.md#fromjson-1)
- [fromJsonString](OutwardJobFreeIssueMaterialAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobFreeIssueMaterialAncillaryParameters**(`data?`): [`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)\> |

#### Returns

[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)

#### Overrides

Message\&lt;OutwardJobFreeIssueMaterialAncillaryParameters\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:514

## Properties

### locationUuid

• **locationUuid**: `string` = `""`

The UUID of the location (the UUID of the associated location_id)

**`Generated`**

from field: string location_uuid = 215;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:512

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:505

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:521

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:519

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterialAncillaryParameters"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:520

## Methods

### clone

▸ **clone**(): [`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)

Create a deep copy.

#### Returns

[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)\> |
| `b` | `undefined` \| [`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:538

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:526

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:530

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialAncillaryParameters`](OutwardJobFreeIssueMaterialAncillaryParameters.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:534
