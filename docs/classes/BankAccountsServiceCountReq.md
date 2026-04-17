[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BankAccountsServiceCountReq

# Class: BankAccountsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.BankAccountsServiceCountReq

## Hierarchy

- `Message`\<[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)\>

  ↳ **`BankAccountsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](BankAccountsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](BankAccountsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](BankAccountsServiceCountReq.md#approvedonend)
- [approvedOnStart](BankAccountsServiceCountReq.md#approvedonstart)
- [approverRoleId](BankAccountsServiceCountReq.md#approverroleid)
- [code](BankAccountsServiceCountReq.md#code)
- [creationTimestampEnd](BankAccountsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](BankAccountsServiceCountReq.md#creationtimestampstart)
- [entityUuid](BankAccountsServiceCountReq.md#entityuuid)
- [formData](BankAccountsServiceCountReq.md#formdata)
- [isActive](BankAccountsServiceCountReq.md#isactive)
- [modificationTimestampEnd](BankAccountsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](BankAccountsServiceCountReq.md#modificationtimestampstart)
- [name](BankAccountsServiceCountReq.md#name)
- [status](BankAccountsServiceCountReq.md#status)
- [fields](BankAccountsServiceCountReq.md#fields)
- [runtime](BankAccountsServiceCountReq.md#runtime)
- [typeName](BankAccountsServiceCountReq.md#typename)

### Methods

- [clone](BankAccountsServiceCountReq.md#clone)
- [equals](BankAccountsServiceCountReq.md#equals)
- [fromBinary](BankAccountsServiceCountReq.md#frombinary)
- [fromJson](BankAccountsServiceCountReq.md#fromjson)
- [fromJsonString](BankAccountsServiceCountReq.md#fromjsonstring)
- [getType](BankAccountsServiceCountReq.md#gettype)
- [toBinary](BankAccountsServiceCountReq.md#tobinary)
- [toJSON](BankAccountsServiceCountReq.md#tojson)
- [toJson](BankAccountsServiceCountReq.md#tojson-1)
- [toJsonString](BankAccountsServiceCountReq.md#tojsonstring)
- [equals](BankAccountsServiceCountReq.md#equals-1)
- [fromBinary](BankAccountsServiceCountReq.md#frombinary-1)
- [fromJson](BankAccountsServiceCountReq.md#fromjson-1)
- [fromJsonString](BankAccountsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new BankAccountsServiceCountReq**(`data?`): [`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)\> |

#### Returns

[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)

#### Overrides

Message\&lt;BankAccountsServiceCountReq\&gt;.constructor

#### Defined in

[src/bank_accounts.scailo_pb.ts:1083](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1083)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1044](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1044)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1028](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1028)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1012](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1012)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1060](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1060)

___

### code

• **code**: `string` = `""`

The unique code by which the bank account is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1074](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1074)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/bank_accounts.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L936)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/bank_accounts.scailo_pb.ts:920](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L920)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/bank_accounts.scailo_pb.ts:984](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L984)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1081](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1081)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/bank_accounts.scailo_pb.ts:904](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L904)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/bank_accounts.scailo_pb.ts:968](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L968)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/bank_accounts.scailo_pb.ts:952](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L952)

___

### name

• **name**: `string` = `""`

The name of the bank account

**`Generated`**

from field: string name = 20;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1067](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1067)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/bank_accounts.scailo_pb.ts:996](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L996)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/bank_accounts.scailo_pb.ts:1090](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1090)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/bank_accounts.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1088)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BankAccountsServiceCountReq"``

#### Defined in

[src/bank_accounts.scailo_pb.ts:1089](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1089)

## Methods

### clone

▸ **clone**(): [`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)

Create a deep copy.

#### Returns

[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md) \| `PlainMessage`\<[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md) \| `PlainMessage`\<[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)\> |
| `b` | `undefined` \| [`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md) \| `PlainMessage`\<[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/bank_accounts.scailo_pb.ts:1119](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1119)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:1107](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1107)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1111)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServiceCountReq`](BankAccountsServiceCountReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/bank_accounts.scailo_pb.ts#L1115)
