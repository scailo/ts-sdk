[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceFilterReq

# Class: CurrenciesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.CurrenciesServiceFilterReq

## Hierarchy

- `Message`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\>

  ↳ **`CurrenciesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](CurrenciesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](CurrenciesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](CurrenciesServiceFilterReq.md#approvedonend)
- [approvedOnStart](CurrenciesServiceFilterReq.md#approvedonstart)
- [approverRoleId](CurrenciesServiceFilterReq.md#approverroleid)
- [count](CurrenciesServiceFilterReq.md#count)
- [creationTimestampEnd](CurrenciesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](CurrenciesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](CurrenciesServiceFilterReq.md#entityuuid)
- [isActive](CurrenciesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](CurrenciesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](CurrenciesServiceFilterReq.md#modificationtimestampstart)
- [name](CurrenciesServiceFilterReq.md#name)
- [offset](CurrenciesServiceFilterReq.md#offset)
- [sortKey](CurrenciesServiceFilterReq.md#sortkey)
- [sortOrder](CurrenciesServiceFilterReq.md#sortorder)
- [status](CurrenciesServiceFilterReq.md#status)
- [symbol](CurrenciesServiceFilterReq.md#symbol)
- [fields](CurrenciesServiceFilterReq.md#fields)
- [runtime](CurrenciesServiceFilterReq.md#runtime)
- [typeName](CurrenciesServiceFilterReq.md#typename)

### Methods

- [clone](CurrenciesServiceFilterReq.md#clone)
- [equals](CurrenciesServiceFilterReq.md#equals)
- [fromBinary](CurrenciesServiceFilterReq.md#frombinary)
- [fromJson](CurrenciesServiceFilterReq.md#fromjson)
- [fromJsonString](CurrenciesServiceFilterReq.md#fromjsonstring)
- [getType](CurrenciesServiceFilterReq.md#gettype)
- [toBinary](CurrenciesServiceFilterReq.md#tobinary)
- [toJSON](CurrenciesServiceFilterReq.md#tojson)
- [toJson](CurrenciesServiceFilterReq.md#tojson-1)
- [toJsonString](CurrenciesServiceFilterReq.md#tojsonstring)
- [equals](CurrenciesServiceFilterReq.md#equals-1)
- [fromBinary](CurrenciesServiceFilterReq.md#frombinary-1)
- [fromJson](CurrenciesServiceFilterReq.md#fromjson-1)
- [fromJsonString](CurrenciesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServiceFilterReq**(`data?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Overrides

Message\&lt;CurrenciesServiceFilterReq\&gt;.constructor

#### Defined in

[src/currencies.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L873)

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

[src/currencies.scailo_pb.ts:841](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L841)

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

[src/currencies.scailo_pb.ts:825](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L825)

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

[src/currencies.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L809)

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

[src/currencies.scailo_pb.ts:857](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L857)

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

[src/currencies.scailo_pb.ts:663](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L663)

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

[src/currencies.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L733)

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

[src/currencies.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L717)

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

[src/currencies.scailo_pb.ts:781](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L781)

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

[src/currencies.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L647)

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

[src/currencies.scailo_pb.ts:765](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L765)

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

[src/currencies.scailo_pb.ts:749](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L749)

___

### name

• **name**: `string` = `""`

The name of the currency

**`Generated`**

from field: string name = 20;

#### Defined in

[src/currencies.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L864)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

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

from field: uint64 offset = 3;

#### Defined in

[src/currencies.scailo_pb.ts:679](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L679)

___

### sortKey

• **sortKey**: [`CURRENCY_SORT_KEY`](../enums/CURRENCY_SORT_KEY.md) = `CURRENCY_SORT_KEY.CURRENCY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.CURRENCY_SORT_KEY sort_key = 5;

#### Defined in

[src/currencies.scailo_pb.ts:701](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L701)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/currencies.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L691)

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

[src/currencies.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L793)

___

### symbol

• **symbol**: `string` = `""`

The unique symbol by which the currency is classified

**`Generated`**

from field: string symbol = 21;

#### Defined in

[src/currencies.scailo_pb.ts:871](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L871)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L880)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies.scailo_pb.ts:878](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L878)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesServiceFilterReq"``

#### Defined in

[src/currencies.scailo_pb.ts:879](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L879)

## Methods

### clone

▸ **clone**(): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md) \| `PlainMessage`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md) \| `PlainMessage`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md) \| `PlainMessage`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies.scailo_pb.ts:912](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L912)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L900)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:904](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L904)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/currencies.scailo_pb.ts#L908)
