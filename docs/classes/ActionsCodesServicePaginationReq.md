[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActionsCodesServicePaginationReq

# Class: ActionsCodesServicePaginationReq

Pagination request for retrieving slices of Action Code records.

**`Generated`**

from message Scailo.ActionsCodesServicePaginationReq

## Hierarchy

- `Message`\<[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)\>

  ↳ **`ActionsCodesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ActionsCodesServicePaginationReq.md#constructor)

### Properties

- [count](ActionsCodesServicePaginationReq.md#count)
- [isActive](ActionsCodesServicePaginationReq.md#isactive)
- [offset](ActionsCodesServicePaginationReq.md#offset)
- [sortKey](ActionsCodesServicePaginationReq.md#sortkey)
- [sortOrder](ActionsCodesServicePaginationReq.md#sortorder)
- [status](ActionsCodesServicePaginationReq.md#status)
- [fields](ActionsCodesServicePaginationReq.md#fields)
- [runtime](ActionsCodesServicePaginationReq.md#runtime)
- [typeName](ActionsCodesServicePaginationReq.md#typename)

### Methods

- [clone](ActionsCodesServicePaginationReq.md#clone)
- [equals](ActionsCodesServicePaginationReq.md#equals)
- [fromBinary](ActionsCodesServicePaginationReq.md#frombinary)
- [fromJson](ActionsCodesServicePaginationReq.md#fromjson)
- [fromJsonString](ActionsCodesServicePaginationReq.md#fromjsonstring)
- [getType](ActionsCodesServicePaginationReq.md#gettype)
- [toBinary](ActionsCodesServicePaginationReq.md#tobinary)
- [toJSON](ActionsCodesServicePaginationReq.md#tojson)
- [toJson](ActionsCodesServicePaginationReq.md#tojson-1)
- [toJsonString](ActionsCodesServicePaginationReq.md#tojsonstring)
- [equals](ActionsCodesServicePaginationReq.md#equals-1)
- [fromBinary](ActionsCodesServicePaginationReq.md#frombinary-1)
- [fromJson](ActionsCodesServicePaginationReq.md#fromjson-1)
- [fromJsonString](ActionsCodesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActionsCodesServicePaginationReq**(`data?`): [`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)\> |

#### Returns

[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)

#### Overrides

Message\&lt;ActionsCodesServicePaginationReq\&gt;.constructor

#### Defined in

[src/actions_codes.scailo_pb.ts:713](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L713)

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

[src/actions_codes.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L661)

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

[src/actions_codes.scailo_pb.ts:645](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L645)

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

[src/actions_codes.scailo_pb.ts:677](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L677)

___

### sortKey

• **sortKey**: [`ACTION_CODE_SORT_KEY`](../enums/ACTION_CODE_SORT_KEY.md) = `ACTION_CODE_SORT_KEY.ACTION_CODE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.ACTION_CODE_SORT_KEY sort_key = 5;

#### Defined in

[src/actions_codes.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L699)

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

[src/actions_codes.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L689)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter results by a specific lifecycle status.

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/actions_codes.scailo_pb.ts:711](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L711)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/actions_codes.scailo_pb.ts:720](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L720)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/actions_codes.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L718)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActionsCodesServicePaginationReq"``

#### Defined in

[src/actions_codes.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L719)

## Methods

### clone

▸ **clone**(): [`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md) \| `PlainMessage`\<[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md) \| `PlainMessage`\<[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md) \| `PlainMessage`\<[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/actions_codes.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L741)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L729)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L733)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServicePaginationReq`](ActionsCodesServicePaginationReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/actions_codes.scailo_pb.ts#L737)
