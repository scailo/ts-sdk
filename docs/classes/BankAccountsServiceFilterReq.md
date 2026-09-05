[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BankAccountsServiceFilterReq

# Class: BankAccountsServiceFilterReq

Advanced filter request for searching and paginating bank accounts using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.BankAccountsServiceFilterReq

## Hierarchy

- `Message`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\>

  ↳ **`BankAccountsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](BankAccountsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](BankAccountsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](BankAccountsServiceFilterReq.md#approvedonend)
- [approvedOnStart](BankAccountsServiceFilterReq.md#approvedonstart)
- [approverRoleId](BankAccountsServiceFilterReq.md#approverroleid)
- [code](BankAccountsServiceFilterReq.md#code)
- [count](BankAccountsServiceFilterReq.md#count)
- [creationTimestampEnd](BankAccountsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](BankAccountsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](BankAccountsServiceFilterReq.md#entityuuid)
- [formData](BankAccountsServiceFilterReq.md#formdata)
- [includeFormData](BankAccountsServiceFilterReq.md#includeformdata)
- [isActive](BankAccountsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](BankAccountsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](BankAccountsServiceFilterReq.md#modificationtimestampstart)
- [name](BankAccountsServiceFilterReq.md#name)
- [offset](BankAccountsServiceFilterReq.md#offset)
- [sortKey](BankAccountsServiceFilterReq.md#sortkey)
- [sortOrder](BankAccountsServiceFilterReq.md#sortorder)
- [status](BankAccountsServiceFilterReq.md#status)
- [fields](BankAccountsServiceFilterReq.md#fields)
- [runtime](BankAccountsServiceFilterReq.md#runtime)
- [typeName](BankAccountsServiceFilterReq.md#typename)

### Methods

- [clone](BankAccountsServiceFilterReq.md#clone)
- [equals](BankAccountsServiceFilterReq.md#equals)
- [fromBinary](BankAccountsServiceFilterReq.md#frombinary)
- [fromJson](BankAccountsServiceFilterReq.md#fromjson)
- [fromJsonString](BankAccountsServiceFilterReq.md#fromjsonstring)
- [getType](BankAccountsServiceFilterReq.md#gettype)
- [toBinary](BankAccountsServiceFilterReq.md#tobinary)
- [toJSON](BankAccountsServiceFilterReq.md#tojson)
- [toJson](BankAccountsServiceFilterReq.md#tojson-1)
- [toJsonString](BankAccountsServiceFilterReq.md#tojsonstring)
- [equals](BankAccountsServiceFilterReq.md#equals-1)
- [fromBinary](BankAccountsServiceFilterReq.md#frombinary-1)
- [fromJson](BankAccountsServiceFilterReq.md#fromjson-1)
- [fromJsonString](BankAccountsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new BankAccountsServiceFilterReq**(`data?`): [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\> |

#### Returns

[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Overrides

Message\&lt;BankAccountsServiceFilterReq\&gt;.constructor

#### Defined in

[src/bank_accounts.scailo_pb.ts:981](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L981)

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

[src/bank_accounts.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L908)

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

[src/bank_accounts.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L892)

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

[src/bank_accounts.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L876)

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

[src/bank_accounts.scailo_pb.ts:924](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L924)

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

[src/bank_accounts.scailo_pb.ts:956](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L956)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/bank_accounts.scailo_pb.ts:730](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L730)

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

[src/bank_accounts.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L800)

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

[src/bank_accounts.scailo_pb.ts:784](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L784)

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

[src/bank_accounts.scailo_pb.ts:848](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L848)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/bank_accounts.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L966)

___

### includeFormData

• `Optional` **includeFormData**: `boolean`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool include_form_data = 501;

#### Defined in

[src/bank_accounts.scailo_pb.ts:979](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L979)

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

[src/bank_accounts.scailo_pb.ts:714](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L714)

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

[src/bank_accounts.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L832)

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

[src/bank_accounts.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L816)

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

[src/bank_accounts.scailo_pb.ts:940](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L940)

___

### offset

• `Optional` **offset**: `bigint`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 offset = 3;

#### Defined in

[src/bank_accounts.scailo_pb.ts:746](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L746)

___

### sortKey

• `Optional` **sortKey**: [`BANK_ACCOUNT_SORT_KEY`](../enums/BANK_ACCOUNT_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.BANK_ACCOUNT_SORT_KEY sort_key = 5;

#### Defined in

[src/bank_accounts.scailo_pb.ts:768](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L768)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/bank_accounts.scailo_pb.ts:758](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L758)

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

[src/bank_accounts.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L860)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/bank_accounts.scailo_pb.ts:988](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L988)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/bank_accounts.scailo_pb.ts:986](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L986)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BankAccountsServiceFilterReq"``

#### Defined in

[src/bank_accounts.scailo_pb.ts:987](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L987)

## Methods

### clone

▸ **clone**(): [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md) \| `PlainMessage`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md) \| `PlainMessage`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md) \| `PlainMessage`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/bank_accounts.scailo_pb.ts:1022](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1022)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:1010](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1010)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1014)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:1018](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L1018)
