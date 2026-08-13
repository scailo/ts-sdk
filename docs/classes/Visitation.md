[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Visitation

# Class: Visitation

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Visitation

## Hierarchy

- `Message`\<[`Visitation`](Visitation.md)\>

  ↳ **`Visitation`**

## Table of contents

### Constructors

- [constructor](Visitation.md#constructor)

### Properties

- [approvalMetadata](Visitation.md#approvalmetadata)
- [associateId](Visitation.md#associateid)
- [completedOn](Visitation.md#completedon)
- [description](Visitation.md#description)
- [entityUuid](Visitation.md#entityuuid)
- [entryTimestamp](Visitation.md#entrytimestamp)
- [exitTimestamp](Visitation.md#exittimestamp)
- [finalRefNumber](Visitation.md#finalrefnumber)
- [formData](Visitation.md#formdata)
- [logs](Visitation.md#logs)
- [metadata](Visitation.md#metadata)
- [referenceId](Visitation.md#referenceid)
- [status](Visitation.md#status)
- [userId](Visitation.md#userid)
- [vaultFolderId](Visitation.md#vaultfolderid)
- [fields](Visitation.md#fields)
- [runtime](Visitation.md#runtime)
- [typeName](Visitation.md#typename)

### Methods

- [clone](Visitation.md#clone)
- [equals](Visitation.md#equals)
- [fromBinary](Visitation.md#frombinary)
- [fromJson](Visitation.md#fromjson)
- [fromJsonString](Visitation.md#fromjsonstring)
- [getType](Visitation.md#gettype)
- [toBinary](Visitation.md#tobinary)
- [toJSON](Visitation.md#tojson)
- [toJson](Visitation.md#tojson-1)
- [toJsonString](Visitation.md#tojsonstring)
- [equals](Visitation.md#equals-1)
- [fromBinary](Visitation.md#frombinary-1)
- [fromJson](Visitation.md#fromjson-1)
- [fromJsonString](Visitation.md#fromjsonstring-1)

## Constructors

### constructor

• **new Visitation**(`data?`): [`Visitation`](Visitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Visitation`](Visitation.md)\> |

#### Returns

[`Visitation`](Visitation.md)

#### Overrides

Message\&lt;Visitation\&gt;.constructor

#### Defined in

[src/visitations.scailo_pb.ts:757](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L757)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/visitations.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L656)

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

The ID of the associate who has requested for visitation

**`Generated`**

from field: uint64 associate_id = 13;

#### Defined in

[src/visitations.scailo_pb.ts:726](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L726)

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

[src/visitations.scailo_pb.ts:682](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L682)

___

### description

• **description**: `string` = `""`

The description of the visitation

**`Generated`**

from field: string description = 16;

#### Defined in

[src/visitations.scailo_pb.ts:747](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L747)

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

[src/visitations.scailo_pb.ts:640](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L640)

___

### entryTimestamp

• **entryTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the visitation begins

**`Generated`**

from field: uint64 entry_timestamp = 14;

#### Defined in

[src/visitations.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L733)

___

### exitTimestamp

• **exitTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the visitation ends

**`Generated`**

from field: uint64 exit_timestamp = 15;

#### Defined in

[src/visitations.scailo_pb.ts:740](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L740)

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

[src/visitations.scailo_pb.ts:712](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L712)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/visitations.scailo_pb.ts:755](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L755)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/visitations.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L672)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/visitations.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L648)

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

[src/visitations.scailo_pb.ts:702](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L702)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/visitations.scailo_pb.ts:664](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L664)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who is being visited

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

[src/visitations.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L719)

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

[src/visitations.scailo_pb.ts:692](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L692)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations.scailo_pb.ts:764](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L764)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L762)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Visitation"``

#### Defined in

[src/visitations.scailo_pb.ts:763](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L763)

## Methods

### clone

▸ **clone**(): [`Visitation`](Visitation.md)

Create a deep copy.

#### Returns

[`Visitation`](Visitation.md)

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
| `other` | `undefined` \| ``null`` \| [`Visitation`](Visitation.md) \| `PlainMessage`\<[`Visitation`](Visitation.md)\> |

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

▸ **getType**(): `MessageType`\<[`Visitation`](Visitation.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Visitation`](Visitation.md)\>

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
| `a` | `undefined` \| [`Visitation`](Visitation.md) \| `PlainMessage`\<[`Visitation`](Visitation.md)\> |
| `b` | `undefined` \| [`Visitation`](Visitation.md) \| `PlainMessage`\<[`Visitation`](Visitation.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations.scailo_pb.ts:794](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L794)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Visitation`](Visitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Visitation`](Visitation.md)

#### Defined in

[src/visitations.scailo_pb.ts:782](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L782)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Visitation`](Visitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Visitation`](Visitation.md)

#### Defined in

[src/visitations.scailo_pb.ts:786](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L786)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Visitation`](Visitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Visitation`](Visitation.md)

#### Defined in

[src/visitations.scailo_pb.ts:790](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/visitations.scailo_pb.ts#L790)
