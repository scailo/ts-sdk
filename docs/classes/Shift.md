[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Shift

# Class: Shift

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Shift

## Hierarchy

- `Message`\<[`Shift`](Shift.md)\>

  ↳ **`Shift`**

## Table of contents

### Constructors

- [constructor](Shift.md#constructor)

### Properties

- [approvalMetadata](Shift.md#approvalmetadata)
- [code](Shift.md#code)
- [completedOn](Shift.md#completedon)
- [dayOfWeek](Shift.md#dayofweek)
- [description](Shift.md#description)
- [endAt](Shift.md#endat)
- [entityUuid](Shift.md#entityuuid)
- [logs](Shift.md#logs)
- [metadata](Shift.md#metadata)
- [name](Shift.md#name)
- [startAt](Shift.md#startat)
- [status](Shift.md#status)
- [timezone](Shift.md#timezone)
- [vaultFolderId](Shift.md#vaultfolderid)
- [fields](Shift.md#fields)
- [runtime](Shift.md#runtime)
- [typeName](Shift.md#typename)

### Methods

- [clone](Shift.md#clone)
- [equals](Shift.md#equals)
- [fromBinary](Shift.md#frombinary)
- [fromJson](Shift.md#fromjson)
- [fromJsonString](Shift.md#fromjsonstring)
- [getType](Shift.md#gettype)
- [toBinary](Shift.md#tobinary)
- [toJSON](Shift.md#tojson)
- [toJson](Shift.md#tojson-1)
- [toJsonString](Shift.md#tojsonstring)
- [equals](Shift.md#equals-1)
- [fromBinary](Shift.md#frombinary-1)
- [fromJson](Shift.md#fromjson-1)
- [fromJsonString](Shift.md#fromjsonstring-1)

## Constructors

### constructor

• **new Shift**(`data?`): [`Shift`](Shift.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Shift`](Shift.md)\> |

#### Returns

[`Shift`](Shift.md)

#### Overrides

Message\&lt;Shift\&gt;.constructor

#### Defined in

[src/shifts.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L522)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/shifts.scailo_pb.ts:435](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L435)

___

### code

• **code**: `string` = `""`

The shift code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/shifts.scailo_pb.ts:485](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L485)

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

[src/shifts.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L461)

___

### dayOfWeek

• **dayOfWeek**: `string` = `""`

The week day that the shift is applicable on

**`Generated`**

from field: string day_of_week = 15;

#### Defined in

[src/shifts.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L513)

___

### description

• **description**: `string` = `""`

The description of the shift

**`Generated`**

from field: string description = 12;

#### Defined in

[src/shifts.scailo_pb.ts:492](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L492)

___

### endAt

• **endAt**: `bigint` = `protoInt64.zero`

The timestamp of when the shift ends (in seconds within a 24 hour cycle)

**`Generated`**

from field: uint64 end_at = 14;

#### Defined in

[src/shifts.scailo_pb.ts:506](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L506)

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

[src/shifts.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L419)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/shifts.scailo_pb.ts:451](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L451)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/shifts.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L427)

___

### name

• **name**: `string` = `""`

The name of the shift

**`Generated`**

from field: string name = 10;

#### Defined in

[src/shifts.scailo_pb.ts:478](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L478)

___

### startAt

• **startAt**: `bigint` = `protoInt64.zero`

The timestamp of when the shift begins (in seconds within a 24 hour cycle)

**`Generated`**

from field: uint64 start_at = 13;

#### Defined in

[src/shifts.scailo_pb.ts:499](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L499)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/shifts.scailo_pb.ts:443](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L443)

___

### timezone

• **timezone**: `string` = `""`

The timezone as represented in the TZ database

**`Generated`**

from field: string timezone = 16;

#### Defined in

[src/shifts.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L520)

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

[src/shifts.scailo_pb.ts:471](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L471)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts.scailo_pb.ts:529](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L529)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts.scailo_pb.ts:527](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L527)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Shift"``

#### Defined in

[src/shifts.scailo_pb.ts:528](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L528)

## Methods

### clone

▸ **clone**(): [`Shift`](Shift.md)

Create a deep copy.

#### Returns

[`Shift`](Shift.md)

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
| `other` | `undefined` \| ``null`` \| [`Shift`](Shift.md) \| `PlainMessage`\<[`Shift`](Shift.md)\> |

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

▸ **getType**(): `MessageType`\<[`Shift`](Shift.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Shift`](Shift.md)\>

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
| `a` | `undefined` \| [`Shift`](Shift.md) \| `PlainMessage`\<[`Shift`](Shift.md)\> |
| `b` | `undefined` \| [`Shift`](Shift.md) \| `PlainMessage`\<[`Shift`](Shift.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts.scailo_pb.ts:558](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L558)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Shift`](Shift.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Shift`](Shift.md)

#### Defined in

[src/shifts.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L546)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Shift`](Shift.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Shift`](Shift.md)

#### Defined in

[src/shifts.scailo_pb.ts:550](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L550)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Shift`](Shift.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Shift`](Shift.md)

#### Defined in

[src/shifts.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L554)
