[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceCountReq

# Class: CurrenciesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.CurrenciesServiceCountReq

## Hierarchy

- `Message`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\>

  ↳ **`CurrenciesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](CurrenciesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](CurrenciesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](CurrenciesServiceCountReq.md#approvedonend)
- [approvedOnStart](CurrenciesServiceCountReq.md#approvedonstart)
- [approverRoleId](CurrenciesServiceCountReq.md#approverroleid)
- [creationTimestampEnd](CurrenciesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](CurrenciesServiceCountReq.md#creationtimestampstart)
- [entityUuid](CurrenciesServiceCountReq.md#entityuuid)
- [isActive](CurrenciesServiceCountReq.md#isactive)
- [modificationTimestampEnd](CurrenciesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](CurrenciesServiceCountReq.md#modificationtimestampstart)
- [name](CurrenciesServiceCountReq.md#name)
- [status](CurrenciesServiceCountReq.md#status)
- [symbol](CurrenciesServiceCountReq.md#symbol)
- [fields](CurrenciesServiceCountReq.md#fields)
- [runtime](CurrenciesServiceCountReq.md#runtime)
- [typeName](CurrenciesServiceCountReq.md#typename)

### Methods

- [clone](CurrenciesServiceCountReq.md#clone)
- [equals](CurrenciesServiceCountReq.md#equals)
- [fromBinary](CurrenciesServiceCountReq.md#frombinary)
- [fromJson](CurrenciesServiceCountReq.md#fromjson)
- [fromJsonString](CurrenciesServiceCountReq.md#fromjsonstring)
- [getType](CurrenciesServiceCountReq.md#gettype)
- [toBinary](CurrenciesServiceCountReq.md#tobinary)
- [toJSON](CurrenciesServiceCountReq.md#tojson)
- [toJson](CurrenciesServiceCountReq.md#tojson-1)
- [toJsonString](CurrenciesServiceCountReq.md#tojsonstring)
- [equals](CurrenciesServiceCountReq.md#equals-1)
- [fromBinary](CurrenciesServiceCountReq.md#frombinary-1)
- [fromJson](CurrenciesServiceCountReq.md#fromjson-1)
- [fromJsonString](CurrenciesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServiceCountReq**(`data?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Overrides

Message\&lt;CurrenciesServiceCountReq\&gt;.constructor

#### Defined in

[src/currencies.scailo_pb.ts:1106](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1106)

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

[src/currencies.scailo_pb.ts:1074](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1074)

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

[src/currencies.scailo_pb.ts:1058](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1058)

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

[src/currencies.scailo_pb.ts:1042](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1042)

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

[src/currencies.scailo_pb.ts:1090](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1090)

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

[src/currencies.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L966)

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

[src/currencies.scailo_pb.ts:950](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L950)

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

[src/currencies.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1014)

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

[src/currencies.scailo_pb.ts:934](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L934)

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

[src/currencies.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L998)

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

[src/currencies.scailo_pb.ts:982](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L982)

___

### name

• **name**: `string` = `""`

The name of the currency

**`Generated`**

from field: string name = 20;

#### Defined in

[src/currencies.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1097)

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

[src/currencies.scailo_pb.ts:1026](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1026)

___

### symbol

• **symbol**: `string` = `""`

The unique symbol by which the currency is classified

**`Generated`**

from field: string symbol = 21;

#### Defined in

[src/currencies.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1104)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies.scailo_pb.ts:1113](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1113)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1111)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesServiceCountReq"``

#### Defined in

[src/currencies.scailo_pb.ts:1112](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1112)

## Methods

### clone

▸ **clone**(): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

Create a deep copy.

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md) \| `PlainMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md) \| `PlainMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |
| `b` | `undefined` \| [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md) \| `PlainMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies.scailo_pb.ts:1141](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1141)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1129)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:1133](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1133)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:1137](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/currencies.scailo_pb.ts#L1137)
