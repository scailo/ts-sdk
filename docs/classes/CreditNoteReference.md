[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNoteReference

# Class: CreditNoteReference

Describes the parameters that constitute a credit note reference

**`Generated`**

from message Scailo.CreditNoteReference

## Hierarchy

- `Message`\<[`CreditNoteReference`](CreditNoteReference.md)\>

  ↳ **`CreditNoteReference`**

## Table of contents

### Constructors

- [constructor](CreditNoteReference.md#constructor)

### Properties

- [approvalMetadata](CreditNoteReference.md#approvalmetadata)
- [creditNoteId](CreditNoteReference.md#creditnoteid)
- [entityUuid](CreditNoteReference.md#entityuuid)
- [metadata](CreditNoteReference.md#metadata)
- [needApproval](CreditNoteReference.md#needapproval)
- [salesReturnId](CreditNoteReference.md#salesreturnid)
- [userComment](CreditNoteReference.md#usercomment)
- [fields](CreditNoteReference.md#fields)
- [runtime](CreditNoteReference.md#runtime)
- [typeName](CreditNoteReference.md#typename)

### Methods

- [clone](CreditNoteReference.md#clone)
- [equals](CreditNoteReference.md#equals)
- [fromBinary](CreditNoteReference.md#frombinary)
- [fromJson](CreditNoteReference.md#fromjson)
- [fromJsonString](CreditNoteReference.md#fromjsonstring)
- [getType](CreditNoteReference.md#gettype)
- [toBinary](CreditNoteReference.md#tobinary)
- [toJSON](CreditNoteReference.md#tojson)
- [toJson](CreditNoteReference.md#tojson-1)
- [toJsonString](CreditNoteReference.md#tojsonstring)
- [equals](CreditNoteReference.md#equals-1)
- [fromBinary](CreditNoteReference.md#frombinary-1)
- [fromJson](CreditNoteReference.md#fromjson-1)
- [fromJsonString](CreditNoteReference.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNoteReference**(`data?`): [`CreditNoteReference`](CreditNoteReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNoteReference`](CreditNoteReference.md)\> |

#### Returns

[`CreditNoteReference`](CreditNoteReference.md)

#### Overrides

Message\&lt;CreditNoteReference\&gt;.constructor

#### Defined in

[src/credit_notes.scailo_pb.ts:3283](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3283)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/credit_notes.scailo_pb.ts:3252](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3252)

___

### creditNoteId

• **creditNoteId**: `bigint` = `protoInt64.zero`

Stores the credit note ID

**`Generated`**

from field: uint64 credit_note_id = 10;

#### Defined in

[src/credit_notes.scailo_pb.ts:3274](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3274)

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

[src/credit_notes.scailo_pb.ts:3236](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3236)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/credit_notes.scailo_pb.ts:3244](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3244)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/credit_notes.scailo_pb.ts:3260](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3260)

___

### salesReturnId

• **salesReturnId**: `bigint` = `protoInt64.zero`

Stores the sales return ID

**`Generated`**

from field: uint64 sales_return_id = 11;

#### Defined in

[src/credit_notes.scailo_pb.ts:3281](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3281)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/credit_notes.scailo_pb.ts:3267](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3267)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:3290](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3290)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:3288](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3288)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNoteReference"``

#### Defined in

[src/credit_notes.scailo_pb.ts:3289](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3289)

## Methods

### clone

▸ **clone**(): [`CreditNoteReference`](CreditNoteReference.md)

Create a deep copy.

#### Returns

[`CreditNoteReference`](CreditNoteReference.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNoteReference`](CreditNoteReference.md) \| `PlainMessage`\<[`CreditNoteReference`](CreditNoteReference.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNoteReference`](CreditNoteReference.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNoteReference`](CreditNoteReference.md)\>

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
| `a` | `undefined` \| [`CreditNoteReference`](CreditNoteReference.md) \| `PlainMessage`\<[`CreditNoteReference`](CreditNoteReference.md)\> |
| `b` | `undefined` \| [`CreditNoteReference`](CreditNoteReference.md) \| `PlainMessage`\<[`CreditNoteReference`](CreditNoteReference.md)\> |

#### Returns

`boolean`

#### Defined in

[src/credit_notes.scailo_pb.ts:3312](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3312)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNoteReference`](CreditNoteReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNoteReference`](CreditNoteReference.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:3300](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3300)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNoteReference`](CreditNoteReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteReference`](CreditNoteReference.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:3304](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3304)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNoteReference`](CreditNoteReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteReference`](CreditNoteReference.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:3308](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/credit_notes.scailo_pb.ts#L3308)
