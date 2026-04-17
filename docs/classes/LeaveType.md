[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeaveType

# Class: LeaveType

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.LeaveType

## Hierarchy

- `Message`\<[`LeaveType`](LeaveType.md)\>

  ↳ **`LeaveType`**

## Table of contents

### Constructors

- [constructor](LeaveType.md#constructor)

### Properties

- [approvalMetadata](LeaveType.md#approvalmetadata)
- [code](LeaveType.md#code)
- [completedOn](LeaveType.md#completedon)
- [description](LeaveType.md#description)
- [entityUuid](LeaveType.md#entityuuid)
- [logs](LeaveType.md#logs)
- [metadata](LeaveType.md#metadata)
- [name](LeaveType.md#name)
- [payrollPercentage](LeaveType.md#payrollpercentage)
- [status](LeaveType.md#status)
- [fields](LeaveType.md#fields)
- [runtime](LeaveType.md#runtime)
- [typeName](LeaveType.md#typename)

### Methods

- [clone](LeaveType.md#clone)
- [equals](LeaveType.md#equals)
- [fromBinary](LeaveType.md#frombinary)
- [fromJson](LeaveType.md#fromjson)
- [fromJsonString](LeaveType.md#fromjsonstring)
- [getType](LeaveType.md#gettype)
- [toBinary](LeaveType.md#tobinary)
- [toJSON](LeaveType.md#tojson)
- [toJson](LeaveType.md#tojson-1)
- [toJsonString](LeaveType.md#tojsonstring)
- [equals](LeaveType.md#equals-1)
- [fromBinary](LeaveType.md#frombinary-1)
- [fromJson](LeaveType.md#fromjson-1)
- [fromJsonString](LeaveType.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeaveType**(`data?`): [`LeaveType`](LeaveType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeaveType`](LeaveType.md)\> |

#### Returns

[`LeaveType`](LeaveType.md)

#### Overrides

Message\&lt;LeaveType\&gt;.constructor

#### Defined in

[src/leaves_types.scailo_pb.ts:366](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L366)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/leaves_types.scailo_pb.ts:310](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L310)

___

### code

• **code**: `string` = `""`

The leave type code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/leaves_types.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L350)

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

[src/leaves_types.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L336)

___

### description

• **description**: `string` = `""`

The description of the leave type

**`Generated`**

from field: string description = 12;

#### Defined in

[src/leaves_types.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L357)

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

[src/leaves_types.scailo_pb.ts:294](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L294)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/leaves_types.scailo_pb.ts:326](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L326)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/leaves_types.scailo_pb.ts:302](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L302)

___

### name

• **name**: `string` = `""`

The name of the leave type

**`Generated`**

from field: string name = 10;

#### Defined in

[src/leaves_types.scailo_pb.ts:343](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L343)

___

### payrollPercentage

• **payrollPercentage**: `bigint` = `protoInt64.zero`

The percentage of the applicable payroll on use of this leave type (in cents)

**`Generated`**

from field: uint64 payroll_percentage = 13;

#### Defined in

[src/leaves_types.scailo_pb.ts:364](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L364)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/leaves_types.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L318)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_types.scailo_pb.ts:373](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L373)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_types.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L371)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeaveType"``

#### Defined in

[src/leaves_types.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L372)

## Methods

### clone

▸ **clone**(): [`LeaveType`](LeaveType.md)

Create a deep copy.

#### Returns

[`LeaveType`](LeaveType.md)

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
| `other` | `undefined` \| ``null`` \| [`LeaveType`](LeaveType.md) \| `PlainMessage`\<[`LeaveType`](LeaveType.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeaveType`](LeaveType.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeaveType`](LeaveType.md)\>

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
| `a` | `undefined` \| [`LeaveType`](LeaveType.md) \| `PlainMessage`\<[`LeaveType`](LeaveType.md)\> |
| `b` | `undefined` \| [`LeaveType`](LeaveType.md) \| `PlainMessage`\<[`LeaveType`](LeaveType.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_types.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L398)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeaveType`](LeaveType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeaveType`](LeaveType.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L386)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeaveType`](LeaveType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveType`](LeaveType.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:390](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L390)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeaveType`](LeaveType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveType`](LeaveType.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_types.scailo_pb.ts#L394)
