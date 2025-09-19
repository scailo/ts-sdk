[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest

# Class: InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#entityuuid)
- [formData](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#formdata)
- [locationId](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#locationid)
- [refFrom](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#reffrom)
- [refId](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#refid)
- [referenceId](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#referenceid)
- [userComment](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#usercomment)
- [vaultFolderId](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#vaultfolderid)
- [fields](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#clone)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest**(`data?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L318)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:267](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L267)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:316](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L316)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:309](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L309)

___

### refFrom

• **refFrom**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 12;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:295](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L295)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:302](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L302)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the inward job free issue material return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:288](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L288)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:274](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L274)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:281](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L281)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L325)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:323](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L323)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest"``

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:324](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L324)

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:348](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L348)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L336)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:340](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L340)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:344](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L344)
