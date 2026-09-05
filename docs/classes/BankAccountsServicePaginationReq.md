[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BankAccountsServicePaginationReq

# Class: BankAccountsServicePaginationReq

Pagination request for retrieving slices of Bank Account records.

**`Generated`**

from message Scailo.BankAccountsServicePaginationReq

## Hierarchy

- `Message`\<[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)\>

  ↳ **`BankAccountsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](BankAccountsServicePaginationReq.md#constructor)

### Properties

- [count](BankAccountsServicePaginationReq.md#count)
- [isActive](BankAccountsServicePaginationReq.md#isactive)
- [offset](BankAccountsServicePaginationReq.md#offset)
- [sortKey](BankAccountsServicePaginationReq.md#sortkey)
- [sortOrder](BankAccountsServicePaginationReq.md#sortorder)
- [status](BankAccountsServicePaginationReq.md#status)
- [fields](BankAccountsServicePaginationReq.md#fields)
- [runtime](BankAccountsServicePaginationReq.md#runtime)
- [typeName](BankAccountsServicePaginationReq.md#typename)

### Methods

- [clone](BankAccountsServicePaginationReq.md#clone)
- [equals](BankAccountsServicePaginationReq.md#equals)
- [fromBinary](BankAccountsServicePaginationReq.md#frombinary)
- [fromJson](BankAccountsServicePaginationReq.md#fromjson)
- [fromJsonString](BankAccountsServicePaginationReq.md#fromjsonstring)
- [getType](BankAccountsServicePaginationReq.md#gettype)
- [toBinary](BankAccountsServicePaginationReq.md#tobinary)
- [toJSON](BankAccountsServicePaginationReq.md#tojson)
- [toJson](BankAccountsServicePaginationReq.md#tojson-1)
- [toJsonString](BankAccountsServicePaginationReq.md#tojsonstring)
- [equals](BankAccountsServicePaginationReq.md#equals-1)
- [fromBinary](BankAccountsServicePaginationReq.md#frombinary-1)
- [fromJson](BankAccountsServicePaginationReq.md#fromjson-1)
- [fromJsonString](BankAccountsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new BankAccountsServicePaginationReq**(`data?`): [`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)\> |

#### Returns

[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)

#### Overrides

Message\&lt;BankAccountsServicePaginationReq\&gt;.constructor

#### Defined in

[src/bank_accounts.scailo_pb.ts:583](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L583)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/bank_accounts.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L531)

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

[src/bank_accounts.scailo_pb.ts:515](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L515)

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

[src/bank_accounts.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L547)

___

### sortKey

• `Optional` **sortKey**: [`BANK_ACCOUNT_SORT_KEY`](../enums/BANK_ACCOUNT_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.BANK_ACCOUNT_SORT_KEY sort_key = 5;

#### Defined in

[src/bank_accounts.scailo_pb.ts:569](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L569)

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

[src/bank_accounts.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L559)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter results by a specific lifecycle status.

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/bank_accounts.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L581)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/bank_accounts.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L590)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/bank_accounts.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L588)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BankAccountsServicePaginationReq"``

#### Defined in

[src/bank_accounts.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L589)

## Methods

### clone

▸ **clone**(): [`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md) \| `PlainMessage`\<[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md) \| `PlainMessage`\<[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md) \| `PlainMessage`\<[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/bank_accounts.scailo_pb.ts:611](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L611)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L599)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:603](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L603)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServicePaginationReq`](BankAccountsServicePaginationReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:607](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/bank_accounts.scailo_pb.ts#L607)
