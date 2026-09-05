[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeaveAdjustment

# Class: LeaveAdjustment

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.LeaveAdjustment

## Hierarchy

- `Message`\<[`LeaveAdjustment`](LeaveAdjustment.md)\>

  ↳ **`LeaveAdjustment`**

## Table of contents

### Constructors

- [constructor](LeaveAdjustment.md#constructor)

### Properties

- [approvalMetadata](LeaveAdjustment.md#approvalmetadata)
- [completedOn](LeaveAdjustment.md#completedon)
- [description](LeaveAdjustment.md#description)
- [entityUuid](LeaveAdjustment.md#entityuuid)
- [finalRefNumber](LeaveAdjustment.md#finalrefnumber)
- [list](LeaveAdjustment.md#list)
- [logs](LeaveAdjustment.md#logs)
- [metadata](LeaveAdjustment.md#metadata)
- [referenceId](LeaveAdjustment.md#referenceid)
- [status](LeaveAdjustment.md#status)
- [userId](LeaveAdjustment.md#userid)
- [vaultFolderId](LeaveAdjustment.md#vaultfolderid)
- [fields](LeaveAdjustment.md#fields)
- [runtime](LeaveAdjustment.md#runtime)
- [typeName](LeaveAdjustment.md#typename)

### Methods

- [clone](LeaveAdjustment.md#clone)
- [equals](LeaveAdjustment.md#equals)
- [fromBinary](LeaveAdjustment.md#frombinary)
- [fromJson](LeaveAdjustment.md#fromjson)
- [fromJsonString](LeaveAdjustment.md#fromjsonstring)
- [getType](LeaveAdjustment.md#gettype)
- [toBinary](LeaveAdjustment.md#tobinary)
- [toJSON](LeaveAdjustment.md#tojson)
- [toJson](LeaveAdjustment.md#tojson-1)
- [toJsonString](LeaveAdjustment.md#tojsonstring)
- [equals](LeaveAdjustment.md#equals-1)
- [fromBinary](LeaveAdjustment.md#frombinary-1)
- [fromJson](LeaveAdjustment.md#fromjson-1)
- [fromJsonString](LeaveAdjustment.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeaveAdjustment**(`data?`): [`LeaveAdjustment`](LeaveAdjustment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeaveAdjustment`](LeaveAdjustment.md)\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Overrides

Message\&lt;LeaveAdjustment\&gt;.constructor

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L576)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:497](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L497)

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

[src/leaves_adjustments.scailo_pb.ts:523](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L523)

___

### description

• **description**: `string` = `""`

The description of the leave adjustment

**`Generated`**

from field: string description = 13;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:567](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L567)

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

[src/leaves_adjustments.scailo_pb.ts:481](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L481)

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

[src/leaves_adjustments.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L553)

___

### list

• **list**: [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)[] = `[]`

The list of associated leave adjustment records

**`Generated`**

from field: repeated Scailo.LeaveAdjustmentRecord list = 20;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:574](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L574)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L513)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L489)

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

[src/leaves_adjustments.scailo_pb.ts:543](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L543)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L505)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this adjustment needs to be made

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:560](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L560)

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

[src/leaves_adjustments.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L533)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:583](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L583)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L581)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeaveAdjustment"``

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L582)

## Methods

### clone

▸ **clone**(): [`LeaveAdjustment`](LeaveAdjustment.md)

Create a deep copy.

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

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
| `other` | `undefined` \| ``null`` \| [`LeaveAdjustment`](LeaveAdjustment.md) \| `PlainMessage`\<[`LeaveAdjustment`](LeaveAdjustment.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeaveAdjustment`](LeaveAdjustment.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeaveAdjustment`](LeaveAdjustment.md)\>

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
| `a` | `undefined` \| [`LeaveAdjustment`](LeaveAdjustment.md) \| `PlainMessage`\<[`LeaveAdjustment`](LeaveAdjustment.md)\> |
| `b` | `undefined` \| [`LeaveAdjustment`](LeaveAdjustment.md) \| `PlainMessage`\<[`LeaveAdjustment`](LeaveAdjustment.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:610](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L610)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L598)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:602](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L602)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L606)
