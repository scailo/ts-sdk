[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Absence

# Class: Absence

Represents a full Absence within the system.

**`Generated`**

from message Scailo.Absence

## Hierarchy

- `Message`\<[`Absence`](Absence.md)\>

  ↳ **`Absence`**

## Table of contents

### Constructors

- [constructor](Absence.md#constructor)

### Properties

- [approvalMetadata](Absence.md#approvalmetadata)
- [completedOn](Absence.md#completedon)
- [description](Absence.md#description)
- [entityUuid](Absence.md#entityuuid)
- [finalRefNumber](Absence.md#finalrefnumber)
- [formData](Absence.md#formdata)
- [fromTimestamp](Absence.md#fromtimestamp)
- [leaveRequestId](Absence.md#leaverequestid)
- [logs](Absence.md#logs)
- [metadata](Absence.md#metadata)
- [quantity](Absence.md#quantity)
- [referenceId](Absence.md#referenceid)
- [status](Absence.md#status)
- [toTimestamp](Absence.md#totimestamp)
- [uomId](Absence.md#uomid)
- [userId](Absence.md#userid)
- [vaultFolderId](Absence.md#vaultfolderid)
- [fields](Absence.md#fields)
- [runtime](Absence.md#runtime)
- [typeName](Absence.md#typename)

### Methods

- [clone](Absence.md#clone)
- [equals](Absence.md#equals)
- [fromBinary](Absence.md#frombinary)
- [fromJson](Absence.md#fromjson)
- [fromJsonString](Absence.md#fromjsonstring)
- [getType](Absence.md#gettype)
- [toBinary](Absence.md#tobinary)
- [toJSON](Absence.md#tojson)
- [toJson](Absence.md#tojson-1)
- [toJsonString](Absence.md#tojsonstring)
- [equals](Absence.md#equals-1)
- [fromBinary](Absence.md#frombinary-1)
- [fromJson](Absence.md#fromjson-1)
- [fromJsonString](Absence.md#fromjsonstring-1)

## Constructors

### constructor

• **new Absence**(`data?`): [`Absence`](Absence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Absence`](Absence.md)\> |

#### Returns

[`Absence`](Absence.md)

#### Overrides

Message\&lt;Absence\&gt;.constructor

#### Defined in

[src/absences.scailo_pb.ts:747](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L747)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/absences.scailo_pb.ts:611](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L611)

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

[src/absences.scailo_pb.ts:637](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L637)

___

### description

• **description**: `string` = `""`

**`Description`**

Descriptive notes for the absence.

**`Example`**

```ts
"Sick Leave"
```

**`Generated`**

from field: string description = 18;

#### Defined in

[src/absences.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L737)

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

[src/absences.scailo_pb.ts:595](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L595)

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

[src/absences.scailo_pb.ts:667](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L667)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/absences.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L745)

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

**`Description`**

Start time of the absence (UNIX Epoch).

**`Example`**

```ts
1698220800
```

**`Generated`**

from field: uint64 from_timestamp = 14;

#### Defined in

[src/absences.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L697)

___

### leaveRequestId

• **leaveRequestId**: `bigint` = `protoInt64.zero`

**`Description`**

The ID of the linked leave request, if any.

**`Example`**

```ts
552
```

**`Generated`**

from field: uint64 leave_request_id = 13;

#### Defined in

[src/absences.scailo_pb.ts:687](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L687)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/absences.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L627)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/absences.scailo_pb.ts:603](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L603)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

**`Description`**

Total quantity in cents (multiplied by 100).

**`Example`**

```ts
150
```

**`Generated`**

from field: uint64 quantity = 17;

#### Defined in

[src/absences.scailo_pb.ts:727](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L727)

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

[src/absences.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L657)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/absences.scailo_pb.ts:619](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L619)

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

**`Description`**

End time of the absence (UNIX Epoch).

**`Example`**

```ts
1698307200
```

**`Generated`**

from field: uint64 to_timestamp = 15;

#### Defined in

[src/absences.scailo_pb.ts:707](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L707)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

**`Description`**

The unit of measure ID.

**`Example`**

```ts
1
```

**`Generated`**

from field: uint64 uom_id = 16;

#### Defined in

[src/absences.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L717)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

**`Description`**

The ID of the employee associated with this record.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

[src/absences.scailo_pb.ts:677](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L677)

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

[src/absences.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L647)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences.scailo_pb.ts:754](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L754)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences.scailo_pb.ts:752](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L752)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Absence"``

#### Defined in

[src/absences.scailo_pb.ts:753](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L753)

## Methods

### clone

▸ **clone**(): [`Absence`](Absence.md)

Create a deep copy.

#### Returns

[`Absence`](Absence.md)

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
| `other` | `undefined` \| ``null`` \| [`Absence`](Absence.md) \| `PlainMessage`\<[`Absence`](Absence.md)\> |

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

▸ **getType**(): `MessageType`\<[`Absence`](Absence.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Absence`](Absence.md)\>

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
| `a` | `undefined` \| [`Absence`](Absence.md) \| `PlainMessage`\<[`Absence`](Absence.md)\> |
| `b` | `undefined` \| [`Absence`](Absence.md) \| `PlainMessage`\<[`Absence`](Absence.md)\> |

#### Returns

`boolean`

#### Defined in

[src/absences.scailo_pb.ts:786](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L786)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Absence`](Absence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Absence`](Absence.md)

#### Defined in

[src/absences.scailo_pb.ts:774](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L774)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Absence`](Absence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Absence`](Absence.md)

#### Defined in

[src/absences.scailo_pb.ts:778](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L778)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Absence`](Absence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Absence`](Absence.md)

#### Defined in

[src/absences.scailo_pb.ts:782](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L782)
