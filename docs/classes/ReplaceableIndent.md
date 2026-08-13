[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndent

# Class: ReplaceableIndent

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.ReplaceableIndent

## Hierarchy

- `Message`\<[`ReplaceableIndent`](ReplaceableIndent.md)\>

  ↳ **`ReplaceableIndent`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndent.md#constructor)

### Properties

- [approvalMetadata](ReplaceableIndent.md#approvalmetadata)
- [completedOn](ReplaceableIndent.md#completedon)
- [description](ReplaceableIndent.md#description)
- [entityUuid](ReplaceableIndent.md#entityuuid)
- [familyId](ReplaceableIndent.md#familyid)
- [finalRefNumber](ReplaceableIndent.md#finalrefnumber)
- [formData](ReplaceableIndent.md#formdata)
- [itemHash](ReplaceableIndent.md#itemhash)
- [list](ReplaceableIndent.md#list)
- [locationId](ReplaceableIndent.md#locationid)
- [logs](ReplaceableIndent.md#logs)
- [metadata](ReplaceableIndent.md#metadata)
- [referenceId](ReplaceableIndent.md#referenceid)
- [status](ReplaceableIndent.md#status)
- [supervisor](ReplaceableIndent.md#supervisor)
- [vaultFolderId](ReplaceableIndent.md#vaultfolderid)
- [fields](ReplaceableIndent.md#fields)
- [runtime](ReplaceableIndent.md#runtime)
- [typeName](ReplaceableIndent.md#typename)

### Methods

- [clone](ReplaceableIndent.md#clone)
- [equals](ReplaceableIndent.md#equals)
- [fromBinary](ReplaceableIndent.md#frombinary)
- [fromJson](ReplaceableIndent.md#fromjson)
- [fromJsonString](ReplaceableIndent.md#fromjsonstring)
- [getType](ReplaceableIndent.md#gettype)
- [toBinary](ReplaceableIndent.md#tobinary)
- [toJSON](ReplaceableIndent.md#tojson)
- [toJson](ReplaceableIndent.md#tojson-1)
- [toJsonString](ReplaceableIndent.md#tojsonstring)
- [equals](ReplaceableIndent.md#equals-1)
- [fromBinary](ReplaceableIndent.md#frombinary-1)
- [fromJson](ReplaceableIndent.md#fromjson-1)
- [fromJsonString](ReplaceableIndent.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndent**(`data?`): [`ReplaceableIndent`](ReplaceableIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndent`](ReplaceableIndent.md)\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Overrides

Message\&lt;ReplaceableIndent\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:721](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L721)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:613](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L613)

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

[src/replaceable_indents.scailo_pb.ts:639](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L639)

___

### description

• **description**: `string` = `""`

The description of the replaceable indent

**`Generated`**

from field: string description = 16;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:704](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L704)

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

[src/replaceable_indents.scailo_pb.ts:597](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L597)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 14;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L690)

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

[src/replaceable_indents.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L669)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 40;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L719)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 15;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L697)

___

### list

• **list**: [`ReplaceableIndentItem`](ReplaceableIndentItem.md)[] = `[]`

The list of associated replaceable indent items

**`Generated`**

from field: repeated Scailo.ReplaceableIndentItem list = 30;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:711](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L711)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 12;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L676)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:629](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L629)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:605](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L605)

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

[src/replaceable_indents.scailo_pb.ts:659](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L659)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:621](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L621)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 13;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L683)

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

[src/replaceable_indents.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L649)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:728](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L728)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:726](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L726)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndent"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:727](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L727)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndent`](ReplaceableIndent.md)

Create a deep copy.

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndent`](ReplaceableIndent.md) \| `PlainMessage`\<[`ReplaceableIndent`](ReplaceableIndent.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndent`](ReplaceableIndent.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndent`](ReplaceableIndent.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndent`](ReplaceableIndent.md) \| `PlainMessage`\<[`ReplaceableIndent`](ReplaceableIndent.md)\> |
| `b` | `undefined` \| [`ReplaceableIndent`](ReplaceableIndent.md) \| `PlainMessage`\<[`ReplaceableIndent`](ReplaceableIndent.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:759](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L759)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:747](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L747)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:751](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L751)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:755](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/replaceable_indents.scailo_pb.ts#L755)
