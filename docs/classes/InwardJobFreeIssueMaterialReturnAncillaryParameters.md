[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterialReturnAncillaryParameters

# Class: InwardJobFreeIssueMaterialReturnAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.InwardJobFreeIssueMaterialReturnAncillaryParameters

## Hierarchy

- `Message`\<[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)\>

  ↳ **`InwardJobFreeIssueMaterialReturnAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#constructor)

### Properties

- [locationUuid](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#locationuuid)
- [refUuid](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#refuuid)
- [fields](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#fields)
- [runtime](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#runtime)
- [typeName](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#typename)

### Methods

- [clone](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#clone)
- [equals](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#equals)
- [fromBinary](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#frombinary)
- [fromJson](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#fromjson)
- [fromJsonString](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#fromjsonstring)
- [getType](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#gettype)
- [toBinary](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#tobinary)
- [toJSON](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#tojson)
- [toJson](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#tojson-1)
- [toJsonString](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#tojsonstring)
- [equals](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#equals-1)
- [fromBinary](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#frombinary-1)
- [fromJson](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#fromjson-1)
- [fromJsonString](InwardJobFreeIssueMaterialReturnAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobFreeIssueMaterialReturnAncillaryParameters**(`data?`): [`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)

#### Overrides

Message\&lt;InwardJobFreeIssueMaterialReturnAncillaryParameters\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:429

## Properties

### locationUuid

• **locationUuid**: `string` = `""`

The UUID of the location (the UUID of the associated location_id)

**`Generated`**

from field: string location_uuid = 215;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:427

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:420

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:436

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:434

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterialReturnAncillaryParameters"``

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:435

## Methods

### clone

▸ **clone**(): [`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)

Create a deep copy.

#### Returns

[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)\> |
| `b` | `undefined` \| [`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:453

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:441

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:445

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnAncillaryParameters`](InwardJobFreeIssueMaterialReturnAncillaryParameters.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:449
