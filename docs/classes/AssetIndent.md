[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndent

# Class: AssetIndent

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.AssetIndent

## Hierarchy

- `Message`\<[`AssetIndent`](AssetIndent.md)\>

  ↳ **`AssetIndent`**

## Table of contents

### Constructors

- [constructor](AssetIndent.md#constructor)

### Properties

- [approvalMetadata](AssetIndent.md#approvalmetadata)
- [completedOn](AssetIndent.md#completedon)
- [entityUuid](AssetIndent.md#entityuuid)
- [finalRefNumber](AssetIndent.md#finalrefnumber)
- [formData](AssetIndent.md#formdata)
- [list](AssetIndent.md#list)
- [locationId](AssetIndent.md#locationid)
- [logs](AssetIndent.md#logs)
- [metadata](AssetIndent.md#metadata)
- [projectId](AssetIndent.md#projectid)
- [referenceId](AssetIndent.md#referenceid)
- [status](AssetIndent.md#status)
- [userId](AssetIndent.md#userid)
- [vaultFolderId](AssetIndent.md#vaultfolderid)
- [fields](AssetIndent.md#fields)
- [runtime](AssetIndent.md#runtime)
- [typeName](AssetIndent.md#typename)

### Methods

- [clone](AssetIndent.md#clone)
- [equals](AssetIndent.md#equals)
- [fromBinary](AssetIndent.md#frombinary)
- [fromJson](AssetIndent.md#fromjson)
- [fromJsonString](AssetIndent.md#fromjsonstring)
- [getType](AssetIndent.md#gettype)
- [toBinary](AssetIndent.md#tobinary)
- [toJSON](AssetIndent.md#tojson)
- [toJson](AssetIndent.md#tojson-1)
- [toJsonString](AssetIndent.md#tojsonstring)
- [equals](AssetIndent.md#equals-1)
- [fromBinary](AssetIndent.md#frombinary-1)
- [fromJson](AssetIndent.md#fromjson-1)
- [fromJsonString](AssetIndent.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndent**(`data?`): [`AssetIndent`](AssetIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndent`](AssetIndent.md)\> |

#### Returns

[`AssetIndent`](AssetIndent.md)

#### Overrides

Message\&lt;AssetIndent\&gt;.constructor

#### Defined in

[src/asset_indents.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L582)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/asset_indents.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L489)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/asset_indents.scailo_pb.ts:515](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L515)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/asset_indents.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L473)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Description`**

The system-generated immutable reference number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/asset_indents.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L552)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/asset_indents.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L580)

___

### list

• **list**: [`AssetIndentItem`](AssetIndentItem.md)[] = `[]`

The list of associated asset indent items

**`Generated`**

from field: repeated Scailo.AssetIndentItem list = 20;

#### Defined in

[src/asset_indents.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L573)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/asset_indents.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L559)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/asset_indents.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L505)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/asset_indents.scailo_pb.ts:481](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L481)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 8;

#### Defined in

[src/asset_indents.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L522)

___

### referenceId

• **referenceId**: `string` = `""`

**`Description`**

The user-provided reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/asset_indents.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L542)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/asset_indents.scailo_pb.ts:497](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L497)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: uint64 user_id = 15;

#### Defined in

[src/asset_indents.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L566)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/asset_indents.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L532)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L589)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents.scailo_pb.ts:587](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L587)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndent"``

#### Defined in

[src/asset_indents.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L588)

## Methods

### clone

▸ **clone**(): [`AssetIndent`](AssetIndent.md)

Create a deep copy.

#### Returns

[`AssetIndent`](AssetIndent.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndent`](AssetIndent.md) \| `PlainMessage`\<[`AssetIndent`](AssetIndent.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndent`](AssetIndent.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndent`](AssetIndent.md)\>

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
| `a` | `undefined` \| [`AssetIndent`](AssetIndent.md) \| `PlainMessage`\<[`AssetIndent`](AssetIndent.md)\> |
| `b` | `undefined` \| [`AssetIndent`](AssetIndent.md) \| `PlainMessage`\<[`AssetIndent`](AssetIndent.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents.scailo_pb.ts:618](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L618)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndent`](AssetIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndent`](AssetIndent.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L606)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndent`](AssetIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndent`](AssetIndent.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:610](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L610)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndent`](AssetIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndent`](AssetIndent.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:614](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L614)
