[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalaryReimbursementItem

# Class: SalaryReimbursementItem

Describes the parameters that constitute an reimbursement item associated to a salary

**`Generated`**

from message Scailo.SalaryReimbursementItem

## Hierarchy

- `Message`\<[`SalaryReimbursementItem`](SalaryReimbursementItem.md)\>

  ↳ **`SalaryReimbursementItem`**

## Table of contents

### Constructors

- [constructor](SalaryReimbursementItem.md#constructor)

### Properties

- [amount](SalaryReimbursementItem.md#amount)
- [approvalMetadata](SalaryReimbursementItem.md#approvalmetadata)
- [entityUuid](SalaryReimbursementItem.md#entityuuid)
- [metadata](SalaryReimbursementItem.md#metadata)
- [needApproval](SalaryReimbursementItem.md#needapproval)
- [refFrom](SalaryReimbursementItem.md#reffrom)
- [refId](SalaryReimbursementItem.md#refid)
- [salaryId](SalaryReimbursementItem.md#salaryid)
- [userComment](SalaryReimbursementItem.md#usercomment)
- [fields](SalaryReimbursementItem.md#fields)
- [runtime](SalaryReimbursementItem.md#runtime)
- [typeName](SalaryReimbursementItem.md#typename)

### Methods

- [clone](SalaryReimbursementItem.md#clone)
- [equals](SalaryReimbursementItem.md#equals)
- [fromBinary](SalaryReimbursementItem.md#frombinary)
- [fromJson](SalaryReimbursementItem.md#fromjson)
- [fromJsonString](SalaryReimbursementItem.md#fromjsonstring)
- [getType](SalaryReimbursementItem.md#gettype)
- [toBinary](SalaryReimbursementItem.md#tobinary)
- [toJSON](SalaryReimbursementItem.md#tojson)
- [toJson](SalaryReimbursementItem.md#tojson-1)
- [toJsonString](SalaryReimbursementItem.md#tojsonstring)
- [equals](SalaryReimbursementItem.md#equals-1)
- [fromBinary](SalaryReimbursementItem.md#frombinary-1)
- [fromJson](SalaryReimbursementItem.md#fromjson-1)
- [fromJsonString](SalaryReimbursementItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalaryReimbursementItem**(`data?`): [`SalaryReimbursementItem`](SalaryReimbursementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalaryReimbursementItem`](SalaryReimbursementItem.md)\> |

#### Returns

[`SalaryReimbursementItem`](SalaryReimbursementItem.md)

#### Overrides

Message\&lt;SalaryReimbursementItem\&gt;.constructor

#### Defined in

[src/salaries.scailo_pb.ts:2038](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2038)

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

The total amount of this item (in cents)

**`Generated`**

from field: int64 amount = 13;

#### Defined in

[src/salaries.scailo_pb.ts:2036](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2036)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/salaries.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L1989)

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

[src/salaries.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L1973)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/salaries.scailo_pb.ts:1981](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L1981)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/salaries.scailo_pb.ts:2001](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2001)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 11;

#### Defined in

[src/salaries.scailo_pb.ts:2022](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2022)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 12;

#### Defined in

[src/salaries.scailo_pb.ts:2029](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2029)

___

### salaryId

• **salaryId**: `bigint` = `protoInt64.zero`

Stores the salary ID

**`Generated`**

from field: int64 salary_id = 10;

#### Defined in

[src/salaries.scailo_pb.ts:2015](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2015)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/salaries.scailo_pb.ts:2008](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2008)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/salaries.scailo_pb.ts:2045](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2045)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/salaries.scailo_pb.ts:2043](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2043)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalaryReimbursementItem"``

#### Defined in

[src/salaries.scailo_pb.ts:2044](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2044)

## Methods

### clone

▸ **clone**(): [`SalaryReimbursementItem`](SalaryReimbursementItem.md)

Create a deep copy.

#### Returns

[`SalaryReimbursementItem`](SalaryReimbursementItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SalaryReimbursementItem`](SalaryReimbursementItem.md) \| `PlainMessage`\<[`SalaryReimbursementItem`](SalaryReimbursementItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalaryReimbursementItem`](SalaryReimbursementItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalaryReimbursementItem`](SalaryReimbursementItem.md)\>

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
| `a` | `undefined` \| [`SalaryReimbursementItem`](SalaryReimbursementItem.md) \| `PlainMessage`\<[`SalaryReimbursementItem`](SalaryReimbursementItem.md)\> |
| `b` | `undefined` \| [`SalaryReimbursementItem`](SalaryReimbursementItem.md) \| `PlainMessage`\<[`SalaryReimbursementItem`](SalaryReimbursementItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/salaries.scailo_pb.ts:2069](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2069)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalaryReimbursementItem`](SalaryReimbursementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalaryReimbursementItem`](SalaryReimbursementItem.md)

#### Defined in

[src/salaries.scailo_pb.ts:2057](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2057)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalaryReimbursementItem`](SalaryReimbursementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryReimbursementItem`](SalaryReimbursementItem.md)

#### Defined in

[src/salaries.scailo_pb.ts:2061](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2061)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalaryReimbursementItem`](SalaryReimbursementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryReimbursementItem`](SalaryReimbursementItem.md)

#### Defined in

[src/salaries.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/salaries.scailo_pb.ts#L2065)
