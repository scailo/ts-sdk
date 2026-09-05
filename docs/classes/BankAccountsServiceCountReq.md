[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BankAccountsServiceCountReq

# Class: BankAccountsServiceCountReq

Target filter request for counting bank account records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

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

[src/bank_accounts.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1250)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1190](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1190)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1174](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1174)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1158](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1158)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1206](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1206)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or internal classification token by which the bank account is registered.

**`Example`**

```ts
"ACC-OPS-01"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1238)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1082](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1082)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1066](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1066)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1130](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1130)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1248](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1248)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1050](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1050)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1114](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1114)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1098](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1098)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or friendly name of the corporate bank account.

**`Example`**

```ts
"Main Operational Account"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1222)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/bank_accounts.scailo_pb.ts:1142](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1142)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/bank_accounts.scailo_pb.ts:1257](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1257)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/bank_accounts.scailo_pb.ts:1255](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1255)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BankAccountsServiceCountReq"``

#### Defined in

[src/bank_accounts.scailo_pb.ts:1256](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1256)

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

[src/bank_accounts.scailo_pb.ts:1286](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1286)

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

[src/bank_accounts.scailo_pb.ts:1274](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1274)

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

[src/bank_accounts.scailo_pb.ts:1278](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1278)

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

[src/bank_accounts.scailo_pb.ts:1282](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1282)
