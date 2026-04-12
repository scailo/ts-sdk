[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OnDutiesServicePaginationResponse

# Class: OnDutiesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.OnDutiesServicePaginationResponse

## Hierarchy

- `Message`\<[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)\>

  ↳ **`OnDutiesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](OnDutiesServicePaginationResponse.md#constructor)

### Properties

- [count](OnDutiesServicePaginationResponse.md#count)
- [offset](OnDutiesServicePaginationResponse.md#offset)
- [payload](OnDutiesServicePaginationResponse.md#payload)
- [total](OnDutiesServicePaginationResponse.md#total)
- [fields](OnDutiesServicePaginationResponse.md#fields)
- [runtime](OnDutiesServicePaginationResponse.md#runtime)
- [typeName](OnDutiesServicePaginationResponse.md#typename)

### Methods

- [clone](OnDutiesServicePaginationResponse.md#clone)
- [equals](OnDutiesServicePaginationResponse.md#equals)
- [fromBinary](OnDutiesServicePaginationResponse.md#frombinary)
- [fromJson](OnDutiesServicePaginationResponse.md#fromjson)
- [fromJsonString](OnDutiesServicePaginationResponse.md#fromjsonstring)
- [getType](OnDutiesServicePaginationResponse.md#gettype)
- [toBinary](OnDutiesServicePaginationResponse.md#tobinary)
- [toJSON](OnDutiesServicePaginationResponse.md#tojson)
- [toJson](OnDutiesServicePaginationResponse.md#tojson-1)
- [toJsonString](OnDutiesServicePaginationResponse.md#tojsonstring)
- [equals](OnDutiesServicePaginationResponse.md#equals-1)
- [fromBinary](OnDutiesServicePaginationResponse.md#frombinary-1)
- [fromJson](OnDutiesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](OnDutiesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDutiesServicePaginationResponse**(`data?`): [`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)\> |

#### Returns

[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)

#### Overrides

Message\&lt;OnDutiesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/on_duties.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L908)

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

[src/on_duties.scailo_pb.ts:878](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L878)

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

[src/on_duties.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L888)

___

### payload

• **payload**: [`OnDuty`](OnDuty.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.OnDuty payload = 4;

#### Defined in

[src/on_duties.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L906)

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

[src/on_duties.scailo_pb.ts:898](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L898)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/on_duties.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L915)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/on_duties.scailo_pb.ts:913](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L913)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OnDutiesServicePaginationResponse"``

#### Defined in

[src/on_duties.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L914)

## Methods

### clone

▸ **clone**(): [`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md) \| `PlainMessage`\<[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md) \| `PlainMessage`\<[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md) \| `PlainMessage`\<[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/on_duties.scailo_pb.ts:934](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L934)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)

#### Defined in

[src/on_duties.scailo_pb.ts:922](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L922)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)

#### Defined in

[src/on_duties.scailo_pb.ts:926](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L926)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServicePaginationResponse`](OnDutiesServicePaginationResponse.md)

#### Defined in

[src/on_duties.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/on_duties.scailo_pb.ts#L930)
