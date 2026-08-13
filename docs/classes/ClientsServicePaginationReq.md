[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServicePaginationReq

# Class: ClientsServicePaginationReq

Pagination request for retrieving slices of Client records.

**`Generated`**

from message Scailo.ClientsServicePaginationReq

## Hierarchy

- `Message`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\>

  ↳ **`ClientsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ClientsServicePaginationReq.md#constructor)

### Properties

- [count](ClientsServicePaginationReq.md#count)
- [isActive](ClientsServicePaginationReq.md#isactive)
- [offset](ClientsServicePaginationReq.md#offset)
- [sortKey](ClientsServicePaginationReq.md#sortkey)
- [sortOrder](ClientsServicePaginationReq.md#sortorder)
- [status](ClientsServicePaginationReq.md#status)
- [fields](ClientsServicePaginationReq.md#fields)
- [runtime](ClientsServicePaginationReq.md#runtime)
- [typeName](ClientsServicePaginationReq.md#typename)

### Methods

- [clone](ClientsServicePaginationReq.md#clone)
- [equals](ClientsServicePaginationReq.md#equals)
- [fromBinary](ClientsServicePaginationReq.md#frombinary)
- [fromJson](ClientsServicePaginationReq.md#fromjson)
- [fromJsonString](ClientsServicePaginationReq.md#fromjsonstring)
- [getType](ClientsServicePaginationReq.md#gettype)
- [toBinary](ClientsServicePaginationReq.md#tobinary)
- [toJSON](ClientsServicePaginationReq.md#tojson)
- [toJson](ClientsServicePaginationReq.md#tojson-1)
- [toJsonString](ClientsServicePaginationReq.md#tojsonstring)
- [equals](ClientsServicePaginationReq.md#equals-1)
- [fromBinary](ClientsServicePaginationReq.md#frombinary-1)
- [fromJson](ClientsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ClientsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServicePaginationReq**(`data?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Overrides

Message\&lt;ClientsServicePaginationReq\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:769](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L769)

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

[src/clients.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L717)

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

[src/clients.scailo_pb.ts:701](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L701)

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

[src/clients.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L733)

___

### sortKey

• `Optional` **sortKey**: [`CLIENT_SORT_KEY`](../enums/CLIENT_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.CLIENT_SORT_KEY sort_key = 5;

#### Defined in

[src/clients.scailo_pb.ts:755](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L755)

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

[src/clients.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L745)

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

[src/clients.scailo_pb.ts:767](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L767)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:776](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L776)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:774](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L774)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServicePaginationReq"``

#### Defined in

[src/clients.scailo_pb.ts:775](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L775)

## Methods

### clone

▸ **clone**(): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md) \| `PlainMessage`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md) \| `PlainMessage`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md) \| `PlainMessage`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:797](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L797)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Defined in

[src/clients.scailo_pb.ts:785](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L785)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Defined in

[src/clients.scailo_pb.ts:789](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L789)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Defined in

[src/clients.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L793)
