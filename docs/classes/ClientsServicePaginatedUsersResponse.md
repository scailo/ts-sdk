[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServicePaginatedUsersResponse

# Class: ClientsServicePaginatedUsersResponse

Paginated response packet containing a subset of Client User records.
Includes complete operational state parameters for rendering frontend data grids and tables.

**`Generated`**

from message Scailo.ClientsServicePaginatedUsersResponse

## Hierarchy

- `Message`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\>

  ↳ **`ClientsServicePaginatedUsersResponse`**

## Table of contents

### Constructors

- [constructor](ClientsServicePaginatedUsersResponse.md#constructor)

### Properties

- [count](ClientsServicePaginatedUsersResponse.md#count)
- [offset](ClientsServicePaginatedUsersResponse.md#offset)
- [payload](ClientsServicePaginatedUsersResponse.md#payload)
- [total](ClientsServicePaginatedUsersResponse.md#total)
- [fields](ClientsServicePaginatedUsersResponse.md#fields)
- [runtime](ClientsServicePaginatedUsersResponse.md#runtime)
- [typeName](ClientsServicePaginatedUsersResponse.md#typename)

### Methods

- [clone](ClientsServicePaginatedUsersResponse.md#clone)
- [equals](ClientsServicePaginatedUsersResponse.md#equals)
- [fromBinary](ClientsServicePaginatedUsersResponse.md#frombinary)
- [fromJson](ClientsServicePaginatedUsersResponse.md#fromjson)
- [fromJsonString](ClientsServicePaginatedUsersResponse.md#fromjsonstring)
- [getType](ClientsServicePaginatedUsersResponse.md#gettype)
- [toBinary](ClientsServicePaginatedUsersResponse.md#tobinary)
- [toJSON](ClientsServicePaginatedUsersResponse.md#tojson)
- [toJson](ClientsServicePaginatedUsersResponse.md#tojson-1)
- [toJsonString](ClientsServicePaginatedUsersResponse.md#tojsonstring)
- [equals](ClientsServicePaginatedUsersResponse.md#equals-1)
- [fromBinary](ClientsServicePaginatedUsersResponse.md#frombinary-1)
- [fromJson](ClientsServicePaginatedUsersResponse.md#fromjson-1)
- [fromJsonString](ClientsServicePaginatedUsersResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServicePaginatedUsersResponse**(`data?`): [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\> |

#### Returns

[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Overrides

Message\&lt;ClientsServicePaginatedUsersResponse\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:2189](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2189)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/clients.scailo_pb.ts:2159](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2159)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/clients.scailo_pb.ts:2169](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2169)

___

### payload

• **payload**: [`ClientUser`](ClientUser.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.ClientUser payload = 4;

#### Defined in

[src/clients.scailo_pb.ts:2187](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2187)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/clients.scailo_pb.ts:2179](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2179)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:2196](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2196)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:2194](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2194)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServicePaginatedUsersResponse"``

#### Defined in

[src/clients.scailo_pb.ts:2195](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2195)

## Methods

### clone

▸ **clone**(): [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

Create a deep copy.

#### Returns

[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md) \| `PlainMessage`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\>

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
| `a` | `undefined` \| [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md) \| `PlainMessage`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\> |
| `b` | `undefined` \| [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md) \| `PlainMessage`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:2215](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2215)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Defined in

[src/clients.scailo_pb.ts:2203](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2203)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Defined in

[src/clients.scailo_pb.ts:2207](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2207)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Defined in

[src/clients.scailo_pb.ts:2211](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L2211)
