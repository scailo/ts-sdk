[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServicePaginationReq

# Class: UsersServicePaginationReq

Pagination request for retrieving slices of User records.

**`Generated`**

from message Scailo.UsersServicePaginationReq

## Hierarchy

- `Message`\<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\>

  ↳ **`UsersServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](UsersServicePaginationReq.md#constructor)

### Properties

- [count](UsersServicePaginationReq.md#count)
- [isActive](UsersServicePaginationReq.md#isactive)
- [offset](UsersServicePaginationReq.md#offset)
- [sortKey](UsersServicePaginationReq.md#sortkey)
- [sortOrder](UsersServicePaginationReq.md#sortorder)
- [status](UsersServicePaginationReq.md#status)
- [fields](UsersServicePaginationReq.md#fields)
- [runtime](UsersServicePaginationReq.md#runtime)
- [typeName](UsersServicePaginationReq.md#typename)

### Methods

- [clone](UsersServicePaginationReq.md#clone)
- [equals](UsersServicePaginationReq.md#equals)
- [fromBinary](UsersServicePaginationReq.md#frombinary)
- [fromJson](UsersServicePaginationReq.md#fromjson)
- [fromJsonString](UsersServicePaginationReq.md#fromjsonstring)
- [getType](UsersServicePaginationReq.md#gettype)
- [toBinary](UsersServicePaginationReq.md#tobinary)
- [toJSON](UsersServicePaginationReq.md#tojson)
- [toJson](UsersServicePaginationReq.md#tojson-1)
- [toJsonString](UsersServicePaginationReq.md#tojsonstring)
- [equals](UsersServicePaginationReq.md#equals-1)
- [fromBinary](UsersServicePaginationReq.md#frombinary-1)
- [fromJson](UsersServicePaginationReq.md#fromjson-1)
- [fromJsonString](UsersServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServicePaginationReq**(`data?`): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\> |

#### Returns

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Overrides

Message\&lt;UsersServicePaginationReq\&gt;.constructor

#### Defined in

[src/users.scailo_pb.ts:1869](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1869)

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

[src/users.scailo_pb.ts:1817](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1817)

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

[src/users.scailo_pb.ts:1801](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1801)

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

[src/users.scailo_pb.ts:1833](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1833)

___

### sortKey

• `Optional` **sortKey**: [`USER_SORT_KEY`](../enums/USER_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.USER_SORT_KEY sort_key = 5;

#### Defined in

[src/users.scailo_pb.ts:1855](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1855)

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

[src/users.scailo_pb.ts:1845](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1845)

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

[src/users.scailo_pb.ts:1867](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1867)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:1876](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1876)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:1874](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1874)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServicePaginationReq"``

#### Defined in

[src/users.scailo_pb.ts:1875](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1875)

## Methods

### clone

▸ **clone**(): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

Create a deep copy.

#### Returns

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServicePaginationReq`](UsersServicePaginationReq.md) \| `PlainMessage`\<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`UsersServicePaginationReq`](UsersServicePaginationReq.md) \| `PlainMessage`\<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\> |
| `b` | `undefined` \| [`UsersServicePaginationReq`](UsersServicePaginationReq.md) \| `PlainMessage`\<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users.scailo_pb.ts:1897](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1897)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Defined in

[src/users.scailo_pb.ts:1885](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1885)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Defined in

[src/users.scailo_pb.ts:1889](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1889)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Defined in

[src/users.scailo_pb.ts:1893](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1893)
