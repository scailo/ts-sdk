[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsServiceCreateRequest

# Class: InwardJobsFreeIssueMaterialsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsServiceCreateRequest

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#entityuuid)
- [formData](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#formdata)
- [refFrom](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#reffrom)
- [refId](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#refid)
- [referenceId](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#referenceid)
- [userComment](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#usercomment)
- [vaultFolderId](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#vaultfolderid)
- [fields](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#clone)
- [equals](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsServiceCreateRequest**(`data?`): [`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsServiceCreateRequest\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:284

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:240

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:282

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:268

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:275

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the inward job free issue material

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:261

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:247

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:254

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:291

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:289

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsServiceCreateRequest"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:290

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:313

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:301

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:305

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceCreateRequest`](InwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:309
