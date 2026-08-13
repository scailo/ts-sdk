[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OnDuty

# Class: OnDuty

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.OnDuty

## Hierarchy

- `Message`\<[`OnDuty`](OnDuty.md)\>

  ↳ **`OnDuty`**

## Table of contents

### Constructors

- [constructor](OnDuty.md#constructor)

### Properties

- [approvalMetadata](OnDuty.md#approvalmetadata)
- [completedOn](OnDuty.md#completedon)
- [description](OnDuty.md#description)
- [entityUuid](OnDuty.md#entityuuid)
- [entryTimestamp](OnDuty.md#entrytimestamp)
- [exitTimestamp](OnDuty.md#exittimestamp)
- [finalRefNumber](OnDuty.md#finalrefnumber)
- [formData](OnDuty.md#formdata)
- [logs](OnDuty.md#logs)
- [metadata](OnDuty.md#metadata)
- [referenceId](OnDuty.md#referenceid)
- [status](OnDuty.md#status)
- [userId](OnDuty.md#userid)
- [vaultFolderId](OnDuty.md#vaultfolderid)
- [fields](OnDuty.md#fields)
- [runtime](OnDuty.md#runtime)
- [typeName](OnDuty.md#typename)

### Methods

- [clone](OnDuty.md#clone)
- [equals](OnDuty.md#equals)
- [fromBinary](OnDuty.md#frombinary)
- [fromJson](OnDuty.md#fromjson)
- [fromJsonString](OnDuty.md#fromjsonstring)
- [getType](OnDuty.md#gettype)
- [toBinary](OnDuty.md#tobinary)
- [toJSON](OnDuty.md#tojson)
- [toJson](OnDuty.md#tojson-1)
- [toJsonString](OnDuty.md#tojsonstring)
- [equals](OnDuty.md#equals-1)
- [fromBinary](OnDuty.md#frombinary-1)
- [fromJson](OnDuty.md#fromjson-1)
- [fromJsonString](OnDuty.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDuty**(`data?`): [`OnDuty`](OnDuty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OnDuty`](OnDuty.md)\> |

#### Returns

[`OnDuty`](OnDuty.md)

#### Overrides

Message\&lt;OnDuty\&gt;.constructor

#### Defined in

[src/on_duties.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L718)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/on_duties.scailo_pb.ts:624](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L624)

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

[src/on_duties.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L650)

___

### description

• **description**: `string` = `""`

The description of the onduty

**`Generated`**

from field: string description = 15;

#### Defined in

[src/on_duties.scailo_pb.ts:708](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L708)

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

[src/on_duties.scailo_pb.ts:608](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L608)

___

### entryTimestamp

• **entryTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the onduty begins

**`Generated`**

from field: uint64 entry_timestamp = 13;

#### Defined in

[src/on_duties.scailo_pb.ts:694](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L694)

___

### exitTimestamp

• **exitTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the onduty ends

**`Generated`**

from field: uint64 exit_timestamp = 14;

#### Defined in

[src/on_duties.scailo_pb.ts:701](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L701)

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

[src/on_duties.scailo_pb.ts:680](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L680)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/on_duties.scailo_pb.ts:716](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L716)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/on_duties.scailo_pb.ts:640](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L640)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/on_duties.scailo_pb.ts:616](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L616)

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

[src/on_duties.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L670)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/on_duties.scailo_pb.ts:632](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L632)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for onduty

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

[src/on_duties.scailo_pb.ts:687](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L687)

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

[src/on_duties.scailo_pb.ts:660](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L660)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/on_duties.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L725)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/on_duties.scailo_pb.ts:723](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L723)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OnDuty"``

#### Defined in

[src/on_duties.scailo_pb.ts:724](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L724)

## Methods

### clone

▸ **clone**(): [`OnDuty`](OnDuty.md)

Create a deep copy.

#### Returns

[`OnDuty`](OnDuty.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDuty`](OnDuty.md) \| `PlainMessage`\<[`OnDuty`](OnDuty.md)\> |

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

▸ **getType**(): `MessageType`\<[`OnDuty`](OnDuty.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OnDuty`](OnDuty.md)\>

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
| `a` | `undefined` \| [`OnDuty`](OnDuty.md) \| `PlainMessage`\<[`OnDuty`](OnDuty.md)\> |
| `b` | `undefined` \| [`OnDuty`](OnDuty.md) \| `PlainMessage`\<[`OnDuty`](OnDuty.md)\> |

#### Returns

`boolean`

#### Defined in

[src/on_duties.scailo_pb.ts:754](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L754)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDuty`](OnDuty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OnDuty`](OnDuty.md)

#### Defined in

[src/on_duties.scailo_pb.ts:742](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L742)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDuty`](OnDuty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDuty`](OnDuty.md)

#### Defined in

[src/on_duties.scailo_pb.ts:746](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L746)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDuty`](OnDuty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDuty`](OnDuty.md)

#### Defined in

[src/on_duties.scailo_pb.ts:750](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/on_duties.scailo_pb.ts#L750)
